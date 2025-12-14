import React, { useState } from 'react';
import './BannerUpload.css';

/**
 * BannerUpload Component
 * 
 * This component allows you to manually upload and manage banner images.
 * To use: Import this component in your admin panel or settings page.
 */

const BannerUpload = ({ onBannerUpdate }) => {
  const [bannerData, setBannerData] = useState({
    title: '',
    subtitle: '',
    buttonText: '',
    buttonLink: '',
    imageFile: null,
    imagePreview: '',
    gradient: '#667eea'
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerData({
        ...bannerData,
        imageFile: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you would upload to your server/cloud storage
    // For now, we'll just use the local preview
    const newBanner = {
      id: Date.now(),
      title: bannerData.title,
      subtitle: bannerData.subtitle,
      buttonText: bannerData.buttonText,
      buttonLink: bannerData.buttonLink,
      image: bannerData.imagePreview, // In production, this would be the uploaded URL
      gradient: `linear-gradient(135deg, ${bannerData.gradient} 0%, #764ba2 100%)`
    };

    // Callback to parent component to update banners
    if (onBannerUpdate) {
      onBannerUpdate(newBanner);
    }

    alert('Banner created successfully! (In production, this would upload to server)');
    
    // Reset form
    setBannerData({
      title: '',
      subtitle: '',
      buttonText: '',
      buttonLink: '',
      imageFile: null,
      imagePreview: '',
      gradient: '#667eea'
    });
  };

  return (
    <div className="banner-upload-wrapper">
      <div className="wave-header">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave-svg">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="banner-upload">
        <div className="upload-header">
          <h2>Upload New Banner</h2>
          <p className="instructions">
            Upload custom banner images for the homepage carousel. 
            Recommended size: 1920x600px
          </p>
        </div>

        <form onSubmit={handleSubmit} className="upload-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="bannerTitle">Banner Title *</label>
              <input
                type="text"
                id="bannerTitle"
                value={bannerData.title}
                onChange={(e) => setBannerData({...bannerData, title: e.target.value})}
                placeholder="e.g., Achieve Your JEE Dreams"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bannerSubtitle">Subtitle *</label>
              <input
                type="text"
                id="bannerSubtitle"
                value={bannerData.subtitle}
                onChange={(e) => setBannerData({...bannerData, subtitle: e.target.value})}
                placeholder="e.g., Join India's Best Preparation Platform"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="buttonText">Button Text *</label>
              <input
                type="text"
                id="buttonText"
                value={bannerData.buttonText}
                onChange={(e) => setBannerData({...bannerData, buttonText: e.target.value})}
                placeholder="e.g., Explore Courses"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="buttonLink">Button Link *</label>
              <input
                type="text"
                id="buttonLink"
                value={bannerData.buttonLink}
                onChange={(e) => setBannerData({...bannerData, buttonLink: e.target.value})}
                placeholder="e.g., /courses/jee"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="gradientColor">Gradient Color</label>
              <div className="color-picker-container">
                <input
                  type="color"
                  id="gradientColor"
                  value={bannerData.gradient}
                  onChange={(e) => setBannerData({...bannerData, gradient: e.target.value})}
                  className="color-input"
                />
                <span className="color-value">{bannerData.gradient}</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="bannerImage">Banner Image * (1920x600px recommended)</label>
              <div className="file-upload-wrapper">
                <label className="file-upload-label">
                  <input
                    type="file"
                    id="bannerImage"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="file-input"
                  />
                  <div className="file-upload-button">
                    <span>Choose Image</span>
                  </div>
                </label>
                {bannerData.imagePreview && (
                  <div className="image-preview">
                    <img src={bannerData.imagePreview} alt="Banner Preview" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Banner
          </button>
        </form>

        <div className="instructions-box">
          <h3>📝 Instructions for Manual Image Upload:</h3>
          <div className="instructions-content">
            <div className="instruction-item">
              <div className="instruction-icon">1</div>
              <div className="instruction-text">
                <strong>Option 1: Use This Form</strong>
                <ul>
                  <li>Fill in all fields above</li>
                  <li>Select an image file (JPG, PNG, WebP)</li>
                  <li>Click "Create Banner"</li>
                  <li>For production: Images will be uploaded to your cloud storage</li>
                </ul>
              </div>
            </div>
            
            <div className="instruction-item">
              <div className="instruction-icon">2</div>
              <div className="instruction-text">
                <strong>Option 2: Direct Code Edit</strong>
                <ul>
                  <li>Place images in <code>public/banners/</code> folder</li>
                  <li>Edit <code>src/pages/Home.jsx</code></li>
                  <li>Update the <code>banners</code> array with your image paths</li>
                  <li>Example: <code>image: "/banners/my-banner.jpg"</code></li>
                </ul>
              </div>
            </div>
            
            <div className="instruction-item">
              <div className="instruction-icon">3</div>
              <div className="instruction-text">
                <strong>Option 3: Use Cloud Storage</strong>
                <ul>
                  <li>Upload to Cloudinary/AWS S3/Firebase Storage</li>
                  <li>Get the public URL</li>
                  <li>Use URL in banner configuration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wave-footer">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave-svg">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
};

export default BannerUpload;