class NotesStore {
   constructor() {
       this.notes = [];
   }

   addNote(state, name) {
       if (name === '') {
           throw new Error('Name cannot be empty');
       }

       if (state !== 'completed' && state !== 'active' && state !== 'others') {
           throw new Error(`Invalid state ${state}`);
       }

       this.notes.push({ state, name });
   }

   getNotes(state) {
       if (state !== 'completed' && state !== 'active' && state !== 'others') {
           throw new Error(`Invalid state ${state}`);
       }

       const notesWithState = this.notes
           .filter(note => note.state === state)
           .map(note => note.name);

       return notesWithState;
   }
}

const notesStore = new NotesStore();
notesStore.addNote('active', 'DrinkTea');
notesStore.addNote('active', 'DrinkCoffee');
notesStore.addNote('completed', 'Study');

try {
   const activeNotes = notesStore.getNotes('active');
   const completedNotes = notesStore.getNotes('completed');
   const fooNotes = notesStore.getNotes('foo');
   
   if (activeNotes.length > 0) {
       console.log(activeNotes.join(','));
   } else {
       console.log('No Notes');
   }

   if (completedNotes.length > 0) {
       console.log(completedNotes.join(','));
   } else {
       console.log('No Notes');
   }

   if (fooNotes.length > 0) {
       console.log(fooNotes.join(','));
   } else {
       console.log('No Notes');
   }
} catch (error) {
   console.error(error.message);
}
