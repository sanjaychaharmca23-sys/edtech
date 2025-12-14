import axios from 'axios';

// Base API URL - Update this when backend is ready
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ==================== AUTH APIS ====================
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token, password) => api.post('/auth/reset-password', { token, password }),
  verifyEmail: (token) => api.post('/auth/verify-email', { token }),
};

// ==================== USER APIS ====================
export const userAPI = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data) => api.put('/user/profile', data),
  changePassword: (passwords) => api.put('/user/change-password', passwords),
  deleteAccount: () => api.delete('/user/account'),
};

// ==================== COURSES APIS ====================
export const coursesAPI = {
  getAllCourses: (params) => api.get('/courses', { params }),
  getCourseById: (id) => api.get(`/courses/${id}`),
  getCoursesByCategory: (category) => api.get(`/courses/category/${category}`),
  getPopularCourses: () => api.get('/courses/popular'),
  enrollCourse: (courseId) => api.post(`/courses/${courseId}/enroll`),
  getEnrolledCourses: () => api.get('/courses/enrolled'),
};

// ==================== BOOKS APIS ====================
export const booksAPI = {
  getAllBooks: (params) => api.get('/books', { params }),
  getBookById: (id) => api.get(`/books/${id}`),
  getBooksByCategory: (category) => api.get(`/books/category/${category}`),
  getBestsellers: () => api.get('/books/bestsellers'),
  searchBooks: (query) => api.get(`/books/search?q=${query}`),
};

// ==================== CART APIS ====================
export const cartAPI = {
  getCart: () => api.get('/cart'),
  addToCart: (itemData) => api.post('/cart/add', itemData),
  updateCartItem: (itemId, quantity) => api.put(`/cart/${itemId}`, { quantity }),
  removeFromCart: (itemId) => api.delete(`/cart/${itemId}`),
  clearCart: () => api.delete('/cart/clear'),
};

// ==================== ORDER APIS ====================
export const orderAPI = {
  createOrder: (orderData) => api.post('/orders', orderData),
  getOrders: () => api.get('/orders'),
  getOrderById: (id) => api.get(`/orders/${id}`),
  cancelOrder: (id) => api.put(`/orders/${id}/cancel`),
};

// ==================== PAYMENT APIS ====================
export const paymentAPI = {
  initiatePayment: (paymentData) => api.post('/payment/initiate', paymentData),
  verifyPayment: (paymentId, signature) => api.post('/payment/verify', { paymentId, signature }),
  getPaymentMethods: () => api.get('/payment/methods'),
  savePaymentMethod: (methodData) => api.post('/payment/methods', methodData),
};

// ==================== TEST SERIES APIS ====================
export const testAPI = {
  getAllTests: (params) => api.get('/tests', { params }),
  getTestById: (id) => api.get(`/tests/${id}`),
  attemptTest: (testId) => api.post(`/tests/${testId}/attempt`),
  submitTest: (testId, answers) => api.post(`/tests/${testId}/submit`, { answers }),
  getTestResults: (attemptId) => api.get(`/tests/results/${attemptId}`),
  getMyTests: () => api.get('/tests/my-tests'),
};

// ==================== CLASSES APIS ====================
export const classesAPI = {
  getLiveClasses: () => api.get('/classes/live'),
  getUpcomingClasses: () => api.get('/classes/upcoming'),
  getRecordedClasses: (params) => api.get('/classes/recorded', { params }),
  joinClass: (classId) => api.post(`/classes/${classId}/join`),
  getClassById: (id) => api.get(`/classes/${id}`),
};

// ==================== BANNER APIS ====================
export const bannerAPI = {
  getBanners: () => api.get('/banners'),
  getActiveBanners: () => api.get('/banners/active'),
  getBannerById: (id) => api.get(`/banners/${id}`),
};

// ==================== CONTACT APIS ====================
export const contactAPI = {
  submitContactForm: (formData) => api.post('/contact', formData),
  getCounselorSlots: () => api.get('/contact/counselor-slots'),
  bookCounseling: (slotData) => api.post('/contact/book-counseling', slotData),
};

// ==================== NEWSLETTER APIS ====================
export const newsletterAPI = {
  subscribe: (email) => api.post('/newsletter/subscribe', { email }),
  unsubscribe: (email) => api.post('/newsletter/unsubscribe', { email }),
};

// ==================== REVIEW APIS ====================
export const reviewAPI = {
  getReviews: (type, id) => api.get(`/reviews/${type}/${id}`),
  addReview: (reviewData) => api.post('/reviews', reviewData),
  updateReview: (id, data) => api.put(`/reviews/${id}`, data),
  deleteReview: (id) => api.delete(`/reviews/${id}`),
};

// ==================== DASHBOARD APIS ====================
export const dashboardAPI = {
  getStudentDashboard: () => api.get('/dashboard/student'),
  getProgressStats: () => api.get('/dashboard/progress'),
  getRecommendations: () => api.get('/dashboard/recommendations'),
};

// ==================== NOTIFICATION APIS ====================
export const notificationAPI = {
  getNotifications: () => api.get('/notifications'),
  markAsRead: (id) => api.put(`/notifications/${id}/read`),
  markAllAsRead: () => api.put('/notifications/read-all'),
  deleteNotification: (id) => api.delete(`/notifications/${id}`),
};

export default api;
