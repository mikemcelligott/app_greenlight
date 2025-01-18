export async function updateUserState(currentUserId, targetUserId, state) {
  try {
    const response = await fetch('/api/update-state', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currentUserId,
        targetUserId,
        state
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating user state:', error);
    throw error;
  }
}
