"use client";

export const Input = ({
  label,
  placeholder,
  onChange,
  type = "text",
  className = "",
}: {
  label: string;
  placeholder: string;
  onChange: (e: any) => void;
  type?: "text" | "password";
  className?: string;
}) => {
  return (
    <div>
      <div className={`text-sm pb-1 pt-21 ${className}`}>
        * <label>{label}</label>
      </div>
      <input
        className={`border rounded px-4 py-2 w-full border-black ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
