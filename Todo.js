        console.log("Welcome Aditya");
        let additionbtn = document.getElementById("additionbtn");
        additionbtn.addEventListener("click", function(e) {
            let wrktxt = document.getElementById("wrktxt");
            let notes = localStorage.getItem("notes");
            if (notes == null) {
                notesObj = [];
            } else {
                notesObj = JSON.parse(notes);
            }
            notesObj.push(wrktxt.value);
            localStorage.setItem("notes", JSON.stringify(notesObj));
            wrktxt.value = "";
            //   console.log(notesObj);
            showNotes();
        });

        // Function to show elements from localStorage
        function showNotes() {
            let notes = localStorage.getItem("notes");
            if (notes == null) {
                notesObj = [];
            } else {
                notesObj = JSON.parse(notes);
            }
            let html = "";
            notesObj.forEach(function(element, index) {
                html += `
                <div class="item" id="itemdiv">
                        <h5>Note</h5>
                        <p>
                            ${element}
                         </p>
                         <div class="butn"> <button id="${index}" onclick="deleteNote(this.id)" class="deleatrbtn btn btn-danger" type="submit">Delate</button> </div>
                </div>
            `;
            });
            let notesElm = document.getElementById("notes");
            if (notesObj.length != 0) {
                notesElm.innerHTML = html;
            } else {
                notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
            }
        }

        // Function to delete a note
        function deleteNote(index) {
            //   console.log("I am deleting", index);

            let notes = localStorage.getItem("notes");
            if (notes == null) {
                notesObj = [];
            } else {
                notesObj = JSON.parse(notes);
            }

            notesObj.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notesObj));
            showNotes();
        }