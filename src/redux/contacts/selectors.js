
export const phonebookSelector = (state) => state.phonebook.contacts;
export const phonebookFilter = (state) => state.phonebook.filter;
export const filteredNamesArr = (state) => [...(state.phonebook.contacts.items.filter(contact =>
   contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())))].sort((a, b) => a.name.localeCompare(b.name));
export const selectLoading = state => state.phonebook.contacts.isLoading;
export const phonebook = (state) => state.phonebook;
