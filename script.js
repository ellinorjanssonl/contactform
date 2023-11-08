
      // först skapar jag en funtion som heter DOMContentLoaded som gör att sidan laddas in först innan den kör koden. 
      // samt hämtar ID från HTML filen och lägger in i variabler.
    

    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contact-form');
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const addContactButton = document.getElementById('add-contact');
        const clearListButton = document.getElementById('clear-list');
        const contactList = document.getElementById('contact-list');
   
        //skapar en funktion för att lägga till en kontakt i listan. 

        // Gör en if sats som säger att om nameInput och phoneInput är tomma så ska den skriva ut ett felmeddelande i rött.
        // annars så ska den skapa en ny kontakt och lägga till i listan och skriva ut ett meddelande i en färg.

        addContactButton.addEventListener('click', function() {
            if (nameInput.value === '' || phoneInput.value === '') {
                displayErrorMessage('Du måste fylla i både namn och telefonnummer!', 'red', 4000);
            } else if (!isValidPhoneNumber(phoneInput.value)) {
                displayErrorMessage('Telefonnumret måste innehålla exakt 10 siffror och inga bokstäver!', 'red', 4000);
            } else {
                const contact = createContact(nameInput.value, phoneInput.value);
                contactList.appendChild(contact);
                displayErrorMessage('Du har lagt till en kontakt!', 'white', 3000);
            }
        
            nameInput.value = '';
            phoneInput.value = '';
        });
        
        function isValidPhoneNumber(phoneNumber) {
            phoneNumber = phoneNumber.replace(/\s|-/g, '');
        // Använder ett sätt för att kontrollera om telefonnumret innehåller exakt 10 siffror och inga bokstäver
            return /^\d{10}$/.test(phoneNumber);
        }
        
        // skapar två variabler som innehåller ljudfiler. Ska spelas upp när man klickar på knapparna.
        let errorSound = new Audio('sound-alert-device-turn-on-turn-off-win-done-chakongaudio-174892.mp3');
        let successSound = new Audio('success-1-6297.mp3');

        // skapar en funktion för att skriva ut felmeddelanden i en viss färg (rött och vitt).
        // Använd setTimeout för att ta bort felmeddelandet efter 'duration' millisekunder
         function displayErrorMessage(message, color, duration) {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = message;
            errorMessage.style.color = color;
            contactForm.appendChild(errorMessage);
          

            if (color === 'red') {
                errorSound.play();
            }
            else if (color === 'white') {
                successSound.play();
            }
            
        // Använder setTimeout för att ta bort felmeddelandet efter 'duration' millisekunder
            setTimeout(function() {
                errorMessage.remove(); // Tar bort felmeddelandet från DOM
            }, duration);
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





