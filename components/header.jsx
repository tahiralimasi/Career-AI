import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px- h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo2.png"}
            alt="Sensai Logo"
            width={800}
            height={80}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2"
              >
                <LayoutDashboard className="h-4 w-4" />
                Industry Insights
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-gradient-to-r from-[#cca235]/10 to-[#798bfd]/10 hover:from-[#cca235]/20 hover:to-[#798bfd]/20 border border-[#cca235]/30 hover:shadow-[0_0_20px_rgba(204,162,53,0.3)] transition-all duration-300 text-foreground px-4 rounded-xl">
                  <StarsIcon className="h-4 w-4 text-[#cca235]" />
                  <span className="hidden md:block font-bold">Growth Tools</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur-xl border border-border/50 shadow-[0_0_40px_rgba(121,139,253,0.15)] rounded-2xl p-2 mt-2">
                <DropdownMenuItem asChild className="rounded-xl hover:bg-muted/50 focus:bg-muted/50 focus:text-foreground transition-colors cursor-pointer py-3 group">
                  <Link href="/resume" className="flex items-center gap-3">
                    <div className="bg-[#1cdb55]/10 p-2 rounded-lg group-hover:bg-[#1cdb55]/20 transition-colors">
                      <FileText className="h-4 w-4 text-[#1cdb55]" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl hover:bg-muted/50 focus:bg-muted/50 focus:text-foreground transition-colors cursor-pointer py-3 group">
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-3"
                  >
                    <div className="bg-[#cca235]/10 p-2 rounded-lg group-hover:bg-[#cca235]/20 transition-colors">
                      <PenBox className="h-4 w-4 text-[#cca235]" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl hover:bg-muted/50 focus:bg-muted/50 focus:text-foreground transition-colors cursor-pointer py-3 group">
                  <Link href="/interview" className="flex items-center gap-3">
                    <div className="bg-[#798bfd]/10 p-2 rounded-lg group-hover:bg-[#798bfd]/20 transition-colors">
                      <GraduationCap className="h-4 w-4 text-[#798bfd]" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
