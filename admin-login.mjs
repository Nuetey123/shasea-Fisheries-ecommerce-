import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Supabase connection
const supabaseUrl = 'https://ripzmgoqtpsejmyzkhde.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpcHptZ29xdHBzZWpteXpraGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxMTc4NTgsImV4cCI6MjA3MDY5Mzg1OH0.OH-HTDASDnuWZ9lbPtttWqXBszgyvP5KtVfmj04R8Ck' // anon key only
const supabase = createClient(supabaseUrl, supabaseKey)

const loginSection = document.getElementById('login-section')
const dashboard = document.getElementById('dashboard')

// LOGIN
document.getElementById('loginBtn').addEventListener('click', async () => {
  const email = document.getElementById('email').value.trim()
  const password = document.getElementById('password').value.trim()

  if (!email || !password) {
    alert("Please enter both email and password.")
    return
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    alert("Login failed: " + error.message);
  } else {
    window.location.href = "admin-dashboard.html"; // Redirect to dashboard page
  }
  
})
