import { Bell, ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  const menus = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Series",
    },
    {
      id: 3,
      title: "Movies",
    },
    {
      id: 4,
      title: "New and Popular",
    },
    {
      id: 5,
      title: "My List",
    },
  ];

  const profileMenus = [
    {
      id: 1,
      title: "Profile",
    },
    {
      id: 2,
      title: "Settings",
    },
    {
      id: 1,
      title: "Logout",
    },
  ];
  return (
    <header className="flex w-full bg-gradient-to-b from-[#000]/90 fixed top-0 z-20 justify-center">
      <main className="flex items-center justify-between w-full p-5 lg:py-7 lg:px-10 max-w-screen-2xl">
        <div className="left flex items-center gap-10">
          <a className="logo-container w-[100px]" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt="logo"
            />
          </a>
          <nav className="menus text-white lg:flex items-center gap-5 text-sm font-medium hidden">
            {menus.map((menu) => (
              <a
                href="#"
                key={menu.id}
                className="hover:text-red-500 duration-300 ease-in-out"
              >
                {menu.title}
              </a>
            ))}
          </nav>
        </div>
        <div className="right flex items-center gap-5 text-white">
          <Search size={20} cursor={"pointer"} />
          <Bell size={20} cursor={"pointer"} />
          <button className="profile flex gap-2 items-center cursor-pointer group relative">
            <img
              src="https://i.pinimg.com/564x/d2/27/d5/d227d592a61dac7be53becc411e0211e.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover "
            />
            <ChevronDown size={20} />
            <div className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-300 ease-in-out top-full bg-black/70 right-0 py-3 mt-3  rounded-md flex flex-col gap-2 text-sm font-medium">
              {profileMenus.map((menu) => (
                <a
                  href="#"
                  className="hover:text-red-500 duration-300 ease-in-out px-10"
                >
                  {menu.title}
                </a>
              ))}
            </div>
          </button>
        </div>
      </main>
    </header>
  );
};

export default Navbar;
