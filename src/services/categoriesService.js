export const categories = [
    { id: '11', nom: "Comedy" },
    { id: '12', nom: "Animation" },
    { id: '13', nom: "Thriller" },
    { id: '14', nom: "Drame"}
  ];
  
  export function getCategories() {
    return categories.filter(g => g);
  }