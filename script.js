
      // först skapar jag en funtion som heter DOMContentLoaded som gör att sidan laddas in först innan den kör koden. 
      // samt hämtar ID från HTML filen och lägger in i variabler.

    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contact-form');
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const addContactButton = document.getElementById('add-contact');
        const clearListButton = document.getElementById('clear-list');
        const contactList = document.getElementById('contact-list');
   
        //skapar en cklick funktion för att lägga till en kontakt i listan. 

        // Gör en if sats som säger att om nameInput och phoneInput är tomma så ska den skriva ut ett felmeddelande i rött.
        // annars så ska den skapa en ny kontakt och lägga till i listan och skriva ut ett meddelande i en färg.

        addContactButton.addEventListener('click', function() {
            if (nameInput.value === '' || phoneInput.value === '') {
                displayErrorMessage('Du måste fylla i både namn och telefonnummer!', 'red');
            } else {
                const contact = createContact(nameInput.value, phoneInput.value);
                contactList.appendChild(contact);
                displayErrorMessage('Du har lagt till en kontakt!', 'green');
            }

            nameInput.value = '';
            phoneInput.value = '';
        });

         // skapar en funktion för att skriva ut felmeddelanden i en viss färg (rött och grönt).
         function displayErrorMessage(message, color) {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = message;
            errorMessage.style.color = color;
            contactForm.appendChild(errorMessage);
        }

        
        // skapar en funktion för att rensa hela listan och inte bara en kontakt.
        clearListButton.addEventListener('click', function() {
            clearContactList();
        });

            function clearContactList() {
                contactList.innerHTML = '';
            }

        // skapar en funktion för att skapa en kontakt och lägga till i listan.
        function createContact(name, phone) {
            const contactDiv = document.createElement('div');
            contactDiv.className = 'contact';
    
        // Skapa textfält för namn och telefonnummer med rätt värden
            const nameField = document.createElement('input');
            nameField.type = 'text';
            nameField.value = name;
            nameField.disabled = true;
    
            const phoneField = document.createElement('input');
            phoneField.type = 'text';
            phoneField.value = phone;
            phoneField.disabled = true;
    
         // Skapa knappar för att ändra och radera kontakten om man vill
            const editButton = document.createElement('button');
            editButton.textContent = 'Ändra kontakt';
            editButton.addEventListener('click', function() {
                nameField.disabled = !nameField.disabled;
                phoneField.disabled = !phoneField.disabled;
            });
        // konstrerar en funktion för att radera en kontakt.
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Radera kontakt';
            deleteButton.addEventListener('click', function() {
                contactList.removeChild(contactDiv);
            });
      
        // Lägg till fälten och knapparna i kontaktdiven
            contactDiv.appendChild(nameField);
            contactDiv.appendChild(phoneField);
            contactDiv.appendChild(editButton);
            contactDiv.appendChild(deleteButton);

        // Returnera kontaktdiven
            return contactDiv;
        }
    });




