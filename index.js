// GET

const req2 = new XMLHttpreq2uest();
req2.open("GET", "https://jsonplaceholder.typicode.com/users");
req2.send();
req2.responseType = "json";
req2.onload = () => {
  if (req2.readyState == 4 && req2.status == 200) {
    const data = req2.response;
    console.log(data);
  } else {
    console.log(`Error: ${req2.status}`);
  }
};

// Post

const req2 = new XMLHttpRequest();
req2.open("POST", "https://jsonplaceholder.typicode.com/posts");
req2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
const body = JSON.stringify({
  title: "Hello World",
  body: "My POST request",
  userId: 900,
});
req2.onload = () => {
  if (req2.readyState == 4 && req2.status == 201) {
    console.log(JSON.parse(req2.responseText));
  } else {
    console.log(`Error: ${req2.status}`);
  }
};
req2.send(body);


    document.getElementById("productForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        
    
        const productId = document.getElementById("productId").value;
        const productName = document.getElementById("productName").value;
        const productImage = document.getElementById("productImage").value;
        const productDescription = document.getElementById("productDescription").value;
        const productPrice = document.getElementById("productPrice").value;
        const productReference = document.getElementById("productReference").value;

    
        
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log("Produit ajouté avec succès !");
              
            }
        };
        xhr.send(JSON.stringify(product));
    
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${productId}</td>
            <td>${productName}</td>
            <td><img src="${productImage}" alt="${productName}" style="width: 50px;"></td>
            <td>${productDescription}</td>
            <td>${productPrice}</td>
            <td>${productReference}</td>
        `;

        
        document.getElementById("productTable").getElementsByTagName("tbody")[0].appendChild(newRow);

        
        document.getElementById("productForm").reset();
    });
    
