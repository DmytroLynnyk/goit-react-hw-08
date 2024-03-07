import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filter/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filters.toLowerCase()) ||
        contact.number.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
