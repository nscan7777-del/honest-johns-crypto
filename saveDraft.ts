export const saveDraft = async (data: any) => {
  try {
    localStorage.setItem('tokenDraft', JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving draft:', error);
    return false;
  }
};
