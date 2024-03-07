import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filter/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

import Fuse from "fuse.js";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    const fuseOptions = {
      keys: ["name", "number"],
    };
    const fuse = new Fuse(contacts, fuseOptions);
    return fuse.search(filters);
  }
);
