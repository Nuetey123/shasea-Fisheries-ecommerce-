// Sidebar Navigation
document.querySelectorAll(".sidebar nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelectorAll(".sidebar nav a").forEach(a => a.classList.remove("active"));
      link.classList.add("active");
  
      let sectionId = link.getAttribute("data-section");
      document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
      document.getElementById(sectionId).classList.add("active");
  
      document.getElementById("section-title").innerText = link.innerText;
    });
  });
  
  // Fetch Orders from Supabase (placeholder)
  async function loadOrders() {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("id", { ascending: false });
  
    if (error) {
      console.error(error);
      return;
    }
  
    const ordersList = document.getElementById("orders-list");
    ordersList.innerHTML = "";
  
    data.forEach(order => {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customer_name}</td>
        <td>${order.phone}</td>
        <td>${order.product_name}</td>
        <td>${order.quantity}</td>
        <td>
          <a href="https://wa.me/${order.phone}?text=Hello%20${encodeURIComponent(order.customer_name)},%20your%20order%20is%20being%20processed" target="_blank">📲</a>
        </td>
      `;
      ordersList.appendChild(row);
    });
  }
  
  // Connect to Supabase
  const SUPABASE_URL = "https://ripzmgoqtpsejmyzkhde.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpcHptZ29xdHBzZWpteXpraGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxMTc4NTgsImV4cCI6MjA3MDY5Mzg1OH0.OH-HTDASDnuWZ9lbPtttWqXBszgyvP5KtVfmj04R8Ck"; // Replace with your real anon key
  const { createClient } = supabase;
  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
  
  // Load orders on page load
  loadOrders();
  