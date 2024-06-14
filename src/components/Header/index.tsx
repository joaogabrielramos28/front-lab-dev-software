export const Header = () => {
  return (
    <header className="w-screen flex  p-6">
      <nav className="w-full flex justify-between">
        <a href="/">
          <div className="text-3xl whitespace-nowrap text-white cursor-pointer">
            <span className="font-semibold bg-white rounded-lg p-1 m-1 text-black">
              Save
            </span>
            <span className="font-thin underline underline-offset-8">Pass</span>
          </div>
        </a>
      </nav>
    </header>
  );
};
