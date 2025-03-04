declare module 'react' {
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    _variant?: "default" | "outline";
  }
}
