const BookIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="hsl(var(--secondary))" />
      <path
        d="M24 14C24 14 20 15 16 15C14 15 12 14.5 12 14.5V32.5C12 32.5 14 33 16 33C20 33 24 32 24 32M24 14C24 14 28 15 32 15C34 15 36 14.5 36 14.5V32.5C36 32.5 34 33 32 33C28 33 24 32 24 32M24 14V32"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookIcon;
