// ... your existing routes (like app.get('/health', ...)) ...

// ONLY start the server if we are NOT running tests
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

// Export the app so your test file can read it
module.exports = app;
