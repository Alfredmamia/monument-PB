export interface Database {
  public: {
    Tables: {
      media_items: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          media_type: 'image' | 'video';
          storage_path: string;
          category: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          media_type: 'image' | 'video';
          storage_path: string;
          category?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string | null;
          media_type?: 'image' | 'video';
          storage_path?: string;
          category?: string;
          created_at?: string;
        };
      };
      actualites: {
        Row: {
          id: string;
          title: string;
          content: string;
          event_date: string | null;
          image_path: string | null;
          published: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          event_date?: string | null;
          image_path?: string | null;
          published?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          event_date?: string | null;
          image_path?: string | null;
          published?: boolean;
          created_at?: string;
        };
      };
    };
  };
}
