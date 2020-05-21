import fetch from 'node-fetch'

export const getUsersResolver = async (ctx: any) => {
  try {
    const response = await fetch(
      `http://localhost:${process.env.USER_PORT}/api/user/all-user`,
      ctx,
    )

    return response.json()
  } catch (error) {
    throw new Error(error)
  }
}

export const getUserByIdResolver = async (user_id: string, ctx: any) => {
  try {
    const response = await fetch(
      `http://localhost:${process.env.USER_PORT}/api/user/${user_id}`,
      ctx,
    )

    return response.json()
  } catch (error) {
    throw new Error(error)
  }
}
