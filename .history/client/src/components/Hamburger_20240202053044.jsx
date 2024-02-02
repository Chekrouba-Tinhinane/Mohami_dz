function MenuIcon({ onClick, isOpen = true }) {
    return (
      // show a circle grey on hover, make it small then grow it
      <button className="flex flex-col gap-1" onClick={onClick}>
        <div
          className={
            "w-5 h-[2px] bg-[#26495D] rounded-full transition-all" +
            (isOpen ? " rotate-45 translate-y-1.5" : "")
          }
        ></div>
        <div
          className={
            "w-5 h-[2px] bg-[#26495D] rounded-full transition-all" +
            (isOpen ? "opacity-0 bg-transparent" : "")
          }
        ></div>
        <div
          className={
            "w-5 h-[2px] bg-[#26495D] rounded-full transition-all" +
            (isOpen ? " -rotate-45 -translate-y-1.5" : "")
          }
        ></div>
      </button>
    );
  }