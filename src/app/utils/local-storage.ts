export const getLocalstorageItem = (item: string) => localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item) || '') : '';

export const setLocalstorageItem = (item: string, value: any) => localStorage.setItem(item, JSON.stringify(value));
