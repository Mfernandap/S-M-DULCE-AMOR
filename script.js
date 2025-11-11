// Configuración del número y mensajes (modifica si quieres)
const phoneNumber = "573115627948"; // número sin símbolos (colombia +57 3115627948)
const baseMessage = "Hola! Quisiera hacer un pedido de: ";

// función para abrir WhatsApp con mensaje prellenado
function openWhatsapp(productName = "") {
  const text = encodeURIComponent(baseMessage + productName + "\nCantidad: \nNombre: \nDirección (si aplica): ");
  const url = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(url, "_blank");
}

// Botón principal en hero
document.getElementById("whatsapp-hero").addEventListener("click", function(e){
  e.preventDefault();
  openWhatsapp("");
});

// Botón de contacto en sección contacto
document.getElementById("whatsapp-contact").addEventListener("click", function(e){
  e.preventDefault();
  openWhatsapp("");
});

// Botones de "Pedir" en cada producto
document.querySelectorAll(".btn-order").forEach(btn => {
  btn.addEventListener("click", function(){
    const product = this.getAttribute("data-product") || "";
    openWhatsapp(product);
  });
});

// Año en el footer
document.getElementById("year").textContent = new Date().getFullYear();
