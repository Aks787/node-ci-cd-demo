// ... your existing routes and app setup ...

// This checks if the file is being run directly (like in production) 
// or if it is just being imported (like in your test file).
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

// Export the app so your test file can still read it
module.exports = app;
