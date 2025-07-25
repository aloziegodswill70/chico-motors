'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('admin-auth') !== 'true') router.push('/admin/login');
    else setAuthorized(true);
  }, [router]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setPreviewUrl('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert('Please select an image');

    setUploading(true);
    setProgress(10);

    // Upload to Cloudinary
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        // Save image URL in temporary API store
        await fetch('/api/images', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: data.url }),
        });
        setProgress(100);
        alert('✅ Image uploaded successfully!');
        setFile(null);
        setPreviewUrl('');
      } else {
        alert('Upload failed');
      }
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }

    setUploading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    router.push('/admin/login');
  };

  if (!authorized) return null;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin: Upload Car Image</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className="border p-2 w-full"
        />

        {previewUrl && (
          <div className="mt-4">
            <p className="font-medium mb-2">📸 Image Preview:</p>
            <img src={previewUrl} alt="Preview" className="max-h-64 rounded border shadow-md" />
          </div>
        )}

        {uploading && (
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded">
              <div className="h-2 bg-blue-600 rounded" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-sm mt-1">Uploading… {progress}%</p>
          </div>
        )}

        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {uploading ? 'Uploading…' : 'Upload'}
        </button>
      </form>
    </div>
  );
}
