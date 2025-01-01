export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          user_id: string
          content: string
          image_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string
          content: string
          image_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          content?: string
          image_url?: string | null
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          name: string
          avatar_url: string | null
          bio: string | null
          created_at: string
        }
      }
      likes: {
        Row: {
          id: string
          user_id: string
          post_id: string
          created_at: string
        }
      }
      comments: {
        Row: {
          id: string
          user_id: string
          post_id: string
          content: string
          created_at: string
        }
      }
    }
  }
}