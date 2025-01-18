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

export async function submitQuizAnswers(userId, answers) {
  try {
    const response = await fetch('/api/quiz-answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        answers,
        submittedAt: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting quiz answers:', error);
    throw error;
  }
}
