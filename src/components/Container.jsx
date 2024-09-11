
  export default function Container({ children, className }) {
    return (
      <div
        className={` px-6 2xl:px-32` + className}
      >
        {children}
      </div>
    );
  }
  