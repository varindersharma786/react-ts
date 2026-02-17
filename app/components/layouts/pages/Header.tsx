// components/Header.tsx
"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { TbLogout } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";

import { logout } from "~/redux/features/authSlice";
import type { RootState } from "~/redux/store";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";

const navigationItems = [
  {
    title: "Products",
    href: "/products",
    items: [
      { title: "Web Templates", href: "/products/web-templates" },
      { title: "UI Components", href: "/products/ui-components" },
      { title: "Plugins", href: "/products/plugins" },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    items: [
      { title: "For Developers", href: "/solutions/developers" },
      { title: "For Designers", href: "/solutions/designers" },
      { title: "For Businesses", href: "/solutions/businesses" },
    ],
  },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state: RootState ) => state.auth);

  if (status === "checking") {
    return <div>Loading...</div>;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                L
              </span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">
              Logo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  to={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
                >
                  {item.title}
                </Link>
                {/* Simple dropdown - remove if you don't need it */}
                {item.items && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                3
              </span>
            </Button>

            {/* Auth Buttons - Desktop */}
            {status !== "authenticated" ? (
              <div className="hidden sm:flex items-center space-x-2">
                  <Button variant={"outline"} onClick={()=>navigate("/auth/login")}> Sign In</Button>
                  <Button onClick={()=>navigate("/auth/register")}> Get Started</Button>
              
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="start">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => dispatch(logout())}>
                      Log out
                      <DropdownMenuShortcut>
                        <TbLogout />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] px-5">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between pb-4 border-b">
                    <Link
                      to="/"
                      className="flex items-center space-x-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">
                          L
                        </span>
                      </div>
                      <span className="font-bold text-xl">Logo</span>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 py-6">
                    <ul className="space-y-6">
                      {navigationItems.map((item) => (
                        <li key={item.title}>
                          {item.items ? (
                            <div className="space-y-3">
                              <div className="font-semibold text-foreground text-lg">
                                {item.title}
                              </div>
                              <ul className="space-y-2 pl-4 border-l-2 border-muted">
                                {item.items.map((subItem) => (
                                  <li key={subItem.title}>
                                    <Link
                                      to={subItem.href}
                                      className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <Link
                              to={item.href}
                              className="block py-2 font-semibold text-foreground hover:text-primary transition-colors text-lg"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                  {status === "authenticated" ? (
                    <div className="border-t pt-6 space-y-4">
                      <div className="flex items-center justify-center space-x-4">
                        <Button variant="ghost" size="icon">
                          <Search className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <User className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => dispatch(logout())}
                      >
                        <TbLogout />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-t pt-6 space-y-4">
                      <div className="flex flex-col space-y-3">
                        <Button variant={"outline"} onClick={()=>navigate("/auth/login")}> Sign In</Button>
                        <Button onClick={()=>navigate("/auth/register")}> Get Started</Button>
                      
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
