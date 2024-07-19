export interface Blog {
  id: string;
  category: string;
  title: string;
  author: string;
  dateCreated: string;
}

export interface createBlogType {
  title: FormDataEntryValue | null;
  category: FormDataEntryValue | null;
  author: FormDataEntryValue | null;
  dateCreated: FormDataEntryValue | null;
}
