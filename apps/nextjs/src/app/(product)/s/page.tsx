"use client";

import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";

export const runtime = "edge";

export default function Page() {
  const searchParams = useSearchParams();

  const search = searchParams.get("k") ?? redirect("/");

  return (
    <main>
      <div className="relative h-[900px] w-[1440px] bg-white">
        <div className="absolute left-0 top-0 h-[99px] w-[1440px] bg-slate-800">
          <div className="absolute left-0 top-0 inline-flex items-center justify-end bg-zinc-900 py-2.5 pl-4 pr-2.5">
            <div className="inline-flex items-center justify-center gap-5 self-stretch">
              <div className="relative h-[30px] w-[100px]">
                <div className="absolute left-0 top-0 h-[30px] w-[100px]"></div>
              </div>
              <div className="relative h-[35px] w-[139px]">
                <div className="absolute left-0 top-[8px] h-4 w-4">
                  <div className="absolute left-[2.83px] top-[1.83px] h-[12.18px] w-[10.24px]"></div>
                </div>
                <div className="font-['Amazon Ember'] absolute left-[22px] top-0 text-xs font-normal text-white">
                  Deliver to John{" "}
                </div>
                <div className="font-['Amazon Ember'] absolute left-[20px] top-[18px] text-sm font-normal text-white">
                  Bangalore 560034
                </div>
              </div>
              <div className="flex h-10 items-center justify-center gap-2.5 rounded bg-white">
                <div className="inline-flex w-[52px] items-start justify-center gap-1.5 rounded-bl rounded-tl bg-zinc-100 py-[13px] pl-[9px] pr-2.5">
                  <div className="font-['Amazon Ember'] text-xs font-normal text-zinc-900">
                    All
                  </div>
                  <div className="relative flex h-3 w-3 flex-col items-start justify-start"></div>
                </div>
                <div className="font-['Amazon Ember'] h-5 w-[647px] text-sm font-normal text-black">
                  {search}
                </div>
                <div className="inline-flex h-10 w-[45px] items-center justify-center rounded-br rounded-tr bg-orange-300 py-2 pl-[11px] pr-2.5">
                  <div className="relative flex h-6 w-6 flex-col items-start justify-start"></div>
                </div>
              </div>
              <div className="flex h-5 items-center justify-center gap-2">
                <div className="relative flex h-5 w-5 flex-col items-start justify-start"></div>
                <div className="relative flex h-2 w-2 flex-col items-start justify-start"></div>
              </div>
              <div className="flex items-center justify-start pr-1">
                <div className="inline-flex items-center justify-center gap-2 self-stretch">
                  <div className="inline-flex flex-col items-start justify-center gap-1">
                    <div className="font-['Amazon Ember'] text-xs font-normal text-white">
                      Hello, John
                    </div>
                    <div className="font-['Amazon Ember'] text-sm font-normal text-white">
                      Accounts & Lists
                    </div>
                  </div>
                  <div className="relative h-2 w-2"></div>
                </div>
              </div>
              <div className="flex items-center justify-start pr-1">
                <div className="inline-flex items-center justify-center gap-2 self-stretch">
                  <div className="inline-flex flex-col items-start justify-center gap-1">
                    <div className="font-['Amazon Ember'] text-xs font-normal text-white">
                      Returns
                    </div>
                    <div className="font-['Amazon Ember'] text-sm font-normal text-white">
                      & Orders
                    </div>
                  </div>
                  <div className="relative h-2 w-2"></div>
                </div>
              </div>
              <div className="flex items-end justify-center">
                <div className="relative flex h-6 w-6 flex-col items-start justify-start">
                  <div className="font-['Amazon Ember'] text-sm font-normal text-amber-500">
                    2
                  </div>
                  <div className="relative h-6 w-6"></div>
                </div>
                <div className="font-['Amazon Ember'] text-sm font-normal text-white">
                  Cart
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[16px] top-[71px] inline-flex items-start justify-start gap-6">
            <div className="flex items-start justify-start gap-1">
              <div className="relative h-4 w-4"></div>
              <div className="font-['Amazon Ember'] h-[15px] w-[18px] text-sm font-normal text-white">
                All
              </div>
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-white">
              Fashion
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-white">
              Mobiles
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-white">
              Gift Ideas
            </div>
            <div className="flex items-end justify-center gap-2">
              <div className="font-['Amazon Ember'] text-sm font-normal text-white">
                Prime
              </div>
              <div className="relative h-3 w-3"></div>
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-white">
              Amazon Pay
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-white">
              Gift Cards
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-white">
              Sports, Fitness & Outdoors
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-white">
              Computers
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-white">
              Customer Service
            </div>
          </div>
          <div className="absolute left-[1040px] top-[60px] inline-flex items-center justify-center bg-slate-800 px-4 pb-1 pt-[3px]">
            <div className="inline-flex items-center justify-center gap-[9px] self-stretch">
              <div className="font-['Abril Fatface'] text-2xl font-normal text-white">
                CINDRELLA
              </div>
              <div className="inline-flex flex-col items-center justify-center gap-1">
                <div className="inline-flex items-start justify-start gap-[15px]">
                  <div className="font-['Amazon Ember'] text-xs font-normal tracking-wide text-white">
                    JOIN PRIME NOW
                  </div>
                  <div className="h-4 w-px bg-white"></div>
                  <div className="h-3.5 w-[79px]">
                    <span className="font-['Amazon Ember Display'] text-sm font-bold text-cyan-500">
                      prime
                    </span>
                    <span className="font-['Amazon Ember Display'] text-sm font-bold text-white">
                      {" "}
                      video
                    </span>
                  </div>
                </div>
                <div className="font-['Amazon Ember'] text-[8px] font-normal text-white">
                  *Redirects to PrimeVideo.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-[99px] inline-flex h-10 w-[1440px] items-center justify-start bg-white py-2.5 pl-14 pr-[1082px] shadow">
          <div className="inline-flex w-[302px] items-start justify-start gap-1 pr-[54px]">
            <div className="font-['Amazon Ember'] h-5 w-[187px] text-sm font-normal text-zinc-900">
              1-16 of over 2,000 results for
            </div>
            <div className="font-['Amazon Ember'] h-5 w-[57px] text-sm font-bold text-amber-700">
              {`"${search}"`}
            </div>
          </div>
        </div>
        <div className="absolute left-[56px] top-[159px] inline-flex flex-col items-start justify-start gap-3 bg-white">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="font-['Amazon Ember'] h-[22px] w-[250px] text-sm font-bold text-black">
              Department
            </div>
            <div className="flex flex-col items-end justify-center gap-1">
              <div className="font-['Amazon Ember'] h-[22px] w-[250px] text-sm font-normal text-black">
                Smart Phones & Basic Mobiles
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <div className="font-['Amazon Ember'] h-[22px] w-[234px] text-sm font-normal text-black">
                  Smart Phones
                </div>
                <div className="font-['Amazon Ember'] h-[22px] w-[234px] text-sm font-normal text-black">
                  Basic Mobiles
                </div>
              </div>
              <div className="inline-flex w-[250px] items-center justify-center gap-1">
                <div className="relative h-3 w-3"></div>
                <div className="font-['Amazon Ember'] h-[22px] w-[234px] text-sm font-normal text-cyan-700">
                  See all two department
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="font-['Amazon Ember'] h-[22px] w-[250px] text-sm font-bold text-black">
              Customer Review
            </div>
            <div className="flex h-[22px] flex-col items-start justify-center gap-1">
              <div className="flex h-[22px] flex-col items-start justify-start gap-1">
                <div className="inline-flex w-[250px] items-center justify-center gap-1">
                  <div className="relative h-5 w-5"></div>
                  <div className="relative h-5 w-5"></div>
                  <div className="relative h-5 w-5"></div>
                  <div className="relative h-5 w-5"></div>
                  <div className="relative h-[18px] w-[18px]"></div>
                  <div className="font-['Amazon Ember'] h-[22px] w-[132px] text-sm font-normal text-zinc-800">
                    & Up
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[22px] flex-col items-start justify-center gap-1">
              <div className="flex h-[22px] flex-col items-start justify-start gap-1">
                <div className="inline-flex w-[250px] items-center justify-center gap-1">
                  <div className="relative h-5 w-5"></div>
                  <div className="relative h-5 w-5"></div>
                  <div className="relative h-5 w-5"></div>
                  <div className="relative h-[18px] w-[18px]"></div>
                  <div className="relative h-[18px] w-[18px]"></div>
                  <div className="font-['Amazon Ember'] h-[22px] w-[132px] text-sm font-normal text-zinc-800">
                    & Up
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[22px] flex-col items-start justify-center gap-1">
              <div className="flex h-[22px] flex-col items-start justify-start gap-1">
                <div className="inline-flex w-[250px] items-center justify-center gap-1">
                  <div className="relative h-5 w-5"></div>
                  <div className="relative h-5 w-5"></div>
                  <div className="relative h-[18px] w-[18px]"></div>
                  <div className="relative h-[18px] w-[18px]"></div>
                  <div className="relative h-[18px] w-[18px]"></div>
                  <div className="font-['Amazon Ember'] h-[22px] w-[132px] text-sm font-normal text-zinc-800">
                    & Up
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[22px] flex-col items-start justify-center gap-1">
              <div className="flex h-[22px] flex-col items-start justify-start gap-1">
                <div className="inline-flex w-[250px] items-center justify-center gap-1">
                  <div className="relative h-5 w-5"></div>
                  <div className="relative h-[18px] w-[18px]"></div>
                  <div className="relative h-[18px] w-[18px]"></div>
                  <div className="relative h-[18px] w-[18px]"></div>
                  <div className="relative h-[18px] w-[18px]"></div>
                  <div className="font-['Amazon Ember'] h-[22px] w-[132px] text-sm font-normal text-zinc-800">
                    & Up
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="font-['Amazon Ember'] h-[22px] w-[250px] text-sm font-bold text-black">
              Brand
            </div>
            <div className="inline-flex h-10 w-[250px] items-center justify-center py-[5px]">
              <div className="inline-flex shrink grow basis-0 items-center justify-start self-stretch rounded border border-zinc-500 bg-white py-[7px] pl-4 pr-[167px]">
                <div className="inline-flex items-start justify-start gap-2 self-stretch">
                  <div className="relative h-4 w-4"></div>
                  <div className="font-['Amazon Ember'] h-4 w-[43px] text-sm font-normal text-neutral-400">
                    Search
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Samsung
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Realme
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Vivo
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Oppo
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Apple
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Xiaomi
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Redmi
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Sony
              </div>
            </div>
            <div className="inline-flex w-[250px] items-center justify-center gap-1">
              <div className="relative h-3 w-3"></div>
              <div className="font-['Amazon Ember'] w-[234px] text-sm font-normal text-cyan-700">
                See more
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="font-['Amazon Ember'] h-[22px] w-[250px] text-sm font-bold text-black">
              Operating System
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Android
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Bada
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Blackberry
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                iOS
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Symbian
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="font-['Amazon Ember'] h-[22px] w-[250px] text-sm font-bold text-black">
              Price
            </div>
            <div className="inline-flex h-4 w-[250px] items-center justify-center">
              <div className="font-['Amazon Ember'] h-4 w-[250px] text-sm font-normal text-black">
                Under ₹1000
              </div>
            </div>
            <div className="font-['Amazon Ember'] h-4 w-[250px] text-sm font-normal text-black">
              ₹1000 - ₹5000
            </div>
            <div className="font-['Amazon Ember'] h-4 w-[250px] text-sm font-normal text-black">
              ₹5000 - ₹10,000
            </div>
            <div className="font-['Amazon Ember'] h-4 w-[250px] text-sm font-normal text-black">
              ₹10,000 - ₹20,000
            </div>
            <div className="font-['Amazon Ember'] h-4 w-[250px] text-sm font-normal text-black">
              Over ₹20,000
            </div>
            <div className="inline-flex w-[250px] items-center justify-center gap-1">
              <div className="relative h-3 w-3"></div>
              <div className="font-['Amazon Ember'] w-[234px] text-sm font-normal text-cyan-700">
                Label 2
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-1.5">
            <div className="flex items-center justify-center rounded border border-zinc-500 bg-white py-[7px] pl-[17px] pr-4">
              <div>
                <span className="font-['Amazon Ember'] text-sm font-normal text-black">
                  ₹
                </span>
                <span className="font-['Amazon Ember'] text-sm font-normal text-neutral-500">
                  Min
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center rounded border border-zinc-500 bg-white px-[15px] py-[7px]">
              <div>
                <span className="font-['Amazon Ember'] text-sm font-normal text-black">
                  ₹
                </span>
                <span className="font-['Amazon Ember'] text-sm font-normal text-neutral-500">
                  Max
                </span>
              </div>
            </div>
            <div className="flex h-[31px] items-center justify-center rounded-lg border border-stone-300 bg-white px-[13px] py-[9px] shadow">
              <div className="font-['Amazon Ember'] text-[11px] font-normal text-black">
                Go
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="font-['Amazon Ember'] h-[22px] w-[250px] text-sm font-bold text-black">
              Deals
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Today’s Deals
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="font-['Amazon Ember'] h-[22px] w-[250px] text-sm font-bold text-black">
              Internal Memory
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Less than 3.9 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                4 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                8 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                16 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                32 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                64 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                128 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                256 GB & above
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="font-['Amazon Ember'] h-[22px] w-[250px] text-sm font-bold text-black">
              RAM
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                8 GB & above
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                6 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                4 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                3 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                2 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                1 GB
              </div>
            </div>
            <div className="inline-flex h-4 w-[250px] items-start justify-center gap-3">
              <div className="relative h-4 w-4 rounded border border-zinc-500 bg-white"></div>
              <div className="font-['Amazon Ember'] h-4 w-[222px] text-sm font-normal text-black">
                Less than 512 MB
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[322px] top-[159px] h-[1277px] w-0.5 bg-zinc-300"></div>
        <div className="absolute left-[372px] top-[159px] inline-flex flex-col items-start justify-start gap-4">
          <div className="inline-flex items-start justify-start gap-4">
            <div className="font-['Amazon Ember'] text-sm font-bold text-black">
              Sort by
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-cyan-700">
              Featured
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-black">
              Price: Low to High
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-black">
              Price: High to Low
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-black">
              Avg. Customer Review
            </div>
            <div className="font-['Amazon Ember'] text-sm font-normal text-black">
              Newest Arrival
            </div>
          </div>
          <div className="h-0.5 w-[1020px] bg-zinc-300"></div>
          <div className="inline-flex items-start justify-center gap-4">
            <div className="inline-flex h-[190px] w-[251px] items-center justify-center px-[34px]">
              <img
                className="h-[190px] w-[183px]"
                src="https://via.placeholder.com/183x190"
              />
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2 self-stretch">
              <div className="inline-flex h-[11px] w-[753px] items-start justify-start gap-2">
                <div className="font-['Amazon Ember'] text-[11px] font-normal text-zinc-600">
                  Sponsored
                </div>
                <div className="relative h-[11px] w-[11px]"></div>
              </div>
              <div className="font-['Amazon Ember'] h-[45px] w-[753px] text-lg font-normal text-zinc-900">
                Samsung Galaxy Z Fold3 5G (Phantom Black, 12GB RAM, 256GB
                Storage) with No Cost EMI/Additional Exchange Offers
              </div>
              <div className="h-[25px] w-[753px]">
                <span className="font-['Amazon Ember'] text-[21px] font-normal text-red-700">
                  ₹1,49,999{" "}
                </span>
                <span className="font-['Amazon Ember'] text-[13px] font-normal text-zinc-600 line-through">
                  ₹1,71,999
                </span>
                <span className="font-['Amazon Ember'] text-sm font-normal text-zinc-900">
                  {" "}
                  Save ₹22,000 (13%)
                </span>
              </div>
              <div className="font-['Amazon Ember'] w-[753px] text-sm font-normal text-zinc-600">
                FREE Delivery by Amazon.
              </div>
              <div className="font-['Amazon Ember'] w-[753px] text-sm font-normal text-zinc-600">
                This item will be released on September 10, 2021.
              </div>
            </div>
          </div>
          <div className="h-0.5 w-[1020px] bg-zinc-300"></div>
          <div className="inline-flex items-start justify-center gap-4">
            <div className="inline-flex h-[190px] w-[251px] items-center justify-center pl-14 pr-[55.11px]">
              <Image
                className="h-[190px] w-[139.89px] opacity-90"
                src="https://via.placeholder.com/140x190"
                alt="image"
                width={140}
                height={190}
              />
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2 self-stretch">
              <div className="inline-flex h-[11px] w-[753px] items-start justify-start gap-2">
                <div className="font-['Amazon Ember'] text-[11px] font-normal text-zinc-600">
                  Sponsored
                </div>
                <div className="relative h-[11px] w-[11px]"></div>
              </div>
              <div className="font-['Amazon Ember'] h-[25px] w-[753px] text-lg font-normal text-zinc-900">
                Apple iPhone 12 Pro Max (128 GB) - Pacific Blue
              </div>
              <div className="relative h-[18px]">
                <div className="absolute left-[118px] top-0 inline-flex h-[18px] w-[51px] items-center justify-center gap-1">
                  <div className="relative h-3 w-3"></div>
                  <div className="font-['Amazon Ember'] text-sm font-normal text-cyan-700">
                    1,084
                  </div>
                </div>
                <div className="absolute left-0 top-0 inline-flex h-[18px] w-[106px] items-start justify-start gap-1">
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center pb-0.5 pl-[0.83px] pr-[2.14px] pt-[1.69px]"></div>
                </div>
              </div>
              <div className="h-[25px] w-[753px]">
                <span className="font-['Amazon Ember'] text-[21px] font-normal text-red-700">
                  ₹1,15,900{" "}
                </span>
                <span className="font-['Amazon Ember'] text-[13px] font-normal text-zinc-600 line-through">
                  ₹1,29,000
                </span>
                <span className="font-['Amazon Ember'] text-sm font-normal text-zinc-900">
                  {" "}
                  Save ₹14,000 (11%)
                </span>
              </div>
              <div className="w-[753px]">
                <span className="font-['Amazon Ember'] text-sm font-normal text-zinc-600">
                  Get it by{" "}
                </span>
                <span className="font-['Amazon Ember'] text-sm font-bold text-zinc-600">
                  Friday, September 10
                </span>
              </div>
              <div className="font-['Amazon Ember'] w-[753px] text-sm font-normal text-zinc-600">
                FREE Delivery by Amazon
              </div>
            </div>
          </div>
          <div className="h-0.5 w-[1020px] bg-zinc-300"></div>
          <div className="inline-flex items-start justify-center gap-4">
            <div className="inline-flex h-[190px] w-[251px] items-center justify-center pl-[55px] pr-[54.20px]">
              <img
                className="h-48 w-[141.80px]"
                src="https://via.placeholder.com/142x192"
              />
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2 self-stretch">
              <div className="inline-flex h-[11px] w-[753px] items-start justify-start gap-2">
                <div className="font-['Amazon Ember'] text-[11px] font-normal text-zinc-600">
                  Sponsored
                </div>
                <div className="relative h-[11px] w-[11px]"></div>
              </div>
              <div className="font-['Amazon Ember'] h-[25px] w-[753px] text-lg font-normal text-zinc-900">
                New Apple iPhone 12 Pro (512 GB) - Gold
              </div>
              <div className="relative h-[18px]">
                <div className="absolute left-[118px] top-0 inline-flex h-[18px] w-[41px] items-center justify-center gap-1">
                  <div className="relative h-3 w-3"></div>
                  <div className="font-['Amazon Ember'] text-sm font-normal text-cyan-700">
                    570
                  </div>
                </div>
                <div className="absolute left-0 top-0 inline-flex h-[18px] w-[106px] items-start justify-start gap-1">
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center pb-0.5 pl-[0.83px] pr-[2.14px] pt-[1.69px]"></div>
                </div>
              </div>
              <div className="inline-flex h-[26px] w-[115px] items-center justify-center bg-red-700 px-2 py-1.5">
                <div className="font-['Amazon Ember'] h-3.5 w-[99px] text-center text-xs font-normal text-white">
                  Limited time deal
                </div>
              </div>
              <div className="h-[25px] w-[753px]">
                <span className="font-['Amazon Ember'] text-[21px] font-normal text-red-700">
                  ₹1,39,900{" "}
                </span>
                <span className="font-['Amazon Ember'] text-[13px] font-normal text-zinc-600 line-through">
                  ₹1,49,000
                </span>
                <span className="font-['Amazon Ember'] text-sm font-normal text-zinc-900">
                  {" "}
                  Save ₹10,000 (7%)
                </span>
              </div>
              <div className="w-[753px]">
                <span className="font-['Amazon Ember'] text-sm font-normal text-zinc-600">
                  Get it by{" "}
                </span>
                <span className="font-['Amazon Ember'] text-sm font-bold text-zinc-600">
                  Friday, September 10
                </span>
              </div>
              <div className="font-['Amazon Ember'] w-[753px] text-sm font-normal text-zinc-600">
                FREE Delivery by Amazon
              </div>
            </div>
          </div>
          <div className="h-0.5 w-[1020px] bg-zinc-300"></div>
          <div className="inline-flex items-start justify-center gap-4">
            <div className="inline-flex h-[190px] w-[251px] items-center justify-center pl-[43px] pr-[44.15px]">
              <img
                className="h-[190px] w-[163.85px]"
                src="https://via.placeholder.com/164x190"
              />
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2 self-stretch">
              <div className="inline-flex h-[11px] w-[753px] items-start justify-start gap-2">
                <div className="font-['Amazon Ember'] text-[11px] font-normal text-zinc-600">
                  Sponsored
                </div>
                <div className="relative h-[11px] w-[11px]"></div>
              </div>
              <div className="font-['Amazon Ember'] h-[45px] w-[753px] text-lg font-normal text-zinc-900">
                Samsung Galaxy Z Flip3 5G (Cream, 8GB RAM, 128GB Storage) with
                No Cost EMI/Additional Exchange Offers
              </div>
              <div className="h-[25px] w-[753px]">
                <span className="font-['Amazon Ember'] text-[21px] font-normal text-red-700">
                  ₹84,999{" "}
                </span>
                <span className="font-['Amazon Ember'] text-[13px] font-normal text-zinc-600 line-through">
                  ₹95,999
                </span>
                <span className="font-['Amazon Ember'] text-sm font-normal text-zinc-900">
                  {" "}
                  Save ₹11,000 (11%)
                </span>
              </div>
              <div className="font-['Amazon Ember'] w-[753px] text-sm font-normal text-zinc-600">
                Flat INR 7000 Off on HDFC Bank CardsFlat INR 7000 Off on HDFC
                Bank Cards
              </div>
              <div className="font-['Amazon Ember'] w-[753px] text-sm font-normal text-zinc-600">
                FREE Delivery by Amazon
              </div>
              <div className="font-['Amazon Ember'] w-[753px] text-sm font-normal text-zinc-600">
                This item will be released on September 10, 2021.
              </div>
            </div>
          </div>
          <div className="h-0.5 w-[1020px] bg-zinc-300"></div>
          <div className="inline-flex items-start justify-center gap-4">
            <div className="inline-flex h-[190px] w-[251px] items-center justify-center pl-20 pr-[80.79px]">
              <img
                className="h-[190px] w-[90.21px]"
                src="https://via.placeholder.com/90x190"
              />
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2 self-stretch">
              <div className="font-['Amazon Ember'] h-[43px] w-[753px] text-lg font-normal text-zinc-900">
                Redmi 9A (Nature Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core
                Helio G25 Processor | 5000 mAh Battery
              </div>
              <div className="relative h-[18px]">
                <div className="absolute left-[118px] top-0 inline-flex h-[18px] w-[75px] items-center justify-center gap-1">
                  <div className="relative h-3 w-3"></div>
                  <div className="font-['Amazon Ember'] w-[59px] text-sm font-normal text-cyan-700">
                    73,948
                  </div>
                </div>
                <div className="absolute left-0 top-0 inline-flex h-[18px] w-[106px] items-start justify-start gap-1">
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                </div>
              </div>
              <div className="h-[25px] w-[753px]">
                <span className="font-['Amazon Ember'] text-[21px] font-normal text-red-700">
                  ₹6,999{" "}
                </span>
                <span className="font-['Amazon Ember'] text-[13px] font-normal text-zinc-600 line-through">
                  ₹8,499
                </span>
                <span className="font-['Amazon Ember'] text-sm font-normal text-zinc-900">
                  {" "}
                  Save ₹1,500 (18%)
                </span>
              </div>
              <div className="font-['Amazon Ember'] w-[753px] text-sm font-normal text-zinc-600">
                FREE Delivery by Amazon
              </div>
              <div className="font-['Amazon Ember'] w-[753px] text-sm font-normal text-zinc-600">
                Get it by Thursday, September 9
              </div>
            </div>
          </div>
          <div className="h-0.5 w-[1020px] bg-zinc-300"></div>
          <div className="inline-flex items-start justify-center gap-4">
            <div className="inline-flex h-[190px] w-[251px] items-center justify-center px-12">
              <img
                className="h-[190px] w-[155px]"
                src="https://via.placeholder.com/155x190"
              />
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2 self-stretch">
              <div className="inline-flex h-[11px] w-[753px] items-start justify-start gap-2">
                <div className="font-['Amazon Ember'] text-[11px] font-normal text-zinc-600">
                  Sponsored
                </div>
                <div className="relative h-[11px] w-[11px]"></div>
              </div>
              <div className="font-['Amazon Ember'] h-[25px] w-[753px] text-lg font-normal text-zinc-900">
                Samsung Galaxy A52s 5G (Violet, 8GB RAM, 128GB Storage)
              </div>
              <div className="relative h-[18px]">
                <div className="absolute left-[118px] top-0 inline-flex h-[18px] w-[33px] items-center justify-center gap-1">
                  <div className="relative h-3 w-3"></div>
                  <div className="font-['Amazon Ember'] text-sm font-normal text-cyan-700">
                    23
                  </div>
                </div>
                <div className="absolute left-0 top-0 inline-flex h-[18px] w-[106px] items-start justify-start gap-1">
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center pb-0.5 pl-[0.83px] pr-[2.14px] pt-[1.69px]"></div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center py-[1.84px] pl-[1.50px] pr-[1.49px]"></div>
                </div>
              </div>
              <div className="h-[25px] w-[753px]">
                <span className="font-['Amazon Ember'] text-[21px] font-normal text-red-700">
                  ₹35,900{" "}
                </span>
                <span className="font-['Amazon Ember'] text-[13px] font-normal text-zinc-600 line-through">
                  ₹40,999
                </span>
                <span className="font-['Amazon Ember'] text-sm font-normal text-zinc-900">
                  {" "}
                  Save ₹5,099 (12%)
                </span>
              </div>
              <div className="w-[753px]">
                <span className="font-['Amazon Ember'] text-sm font-normal text-zinc-600">
                  Get it by{" "}
                </span>
                <span className="font-['Amazon Ember'] text-sm font-bold text-zinc-600">
                  Monday, September 13
                </span>
              </div>
              <div className="font-['Amazon Ember'] w-[753px] text-sm font-normal text-zinc-600">
                FREE Delivery by Amazon
              </div>
              <div className="font-['Amazon Ember'] w-[753px] text-sm font-normal text-red-700">
                Only 2 left in stock
              </div>
            </div>
          </div>
          <div className="h-0.5 w-[1020px] bg-zinc-300"></div>
          <div className="flex flex-col items-start justify-center gap-6 bg-white">
            <div className="font-['Amazon Ember'] h-[22px] w-[1020px] text-xl font-normal uppercase tracking-tight text-zinc-900">
              Related Search
            </div>
            <div className="inline-flex items-start justify-start gap-6 self-stretch">
              <div className="inline-flex w-[324px] flex-col items-start justify-start rounded border border-zinc-300">
                <div className="inline-flex h-[60px] w-[324px] items-center justify-start pl-4 pr-[241px]">
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="relative h-4 w-4"></div>
                    <div className="font-['Amazon Ember'] h-4 w-[43px] text-[13px] font-normal text-black">
                      iPhone{" "}
                    </div>
                  </div>
                </div>
                <div className="h-px w-[324px] bg-zinc-300"></div>
                <div className="inline-flex h-[60px] w-[324px] items-center justify-start pl-4 pr-[211px]">
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="relative h-4 w-4"></div>
                    <div className="font-['Amazon Ember'] h-4 w-[73px] text-[13px] font-normal text-black">
                      Phone Vivo
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex w-[325px] flex-col items-start justify-start rounded border border-zinc-300">
                <div className="inline-flex h-[60px] w-[325px] items-center justify-start pl-4 pr-[200px]">
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="relative h-4 w-4"></div>
                    <div className="font-['Amazon Ember'] h-4 w-[85px] text-[13px] font-normal text-black">
                      iPhone 12 Pro
                    </div>
                  </div>
                </div>
                <div className="h-px w-[325px] bg-zinc-300"></div>
                <div className="inline-flex h-[60px] items-center justify-start pl-4 pr-[189px]">
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="relative h-4 w-4"></div>
                    <div className="font-['Amazon Ember'] text-[13px] font-normal text-black">
                      Phone Samsung
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex w-[324px] flex-col items-start justify-start rounded border border-zinc-300">
                <div className="inline-flex h-[60px] items-center justify-start pl-4 pr-[193px]">
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="relative h-4 w-4"></div>
                    <div className="font-['Amazon Ember'] text-[13px] font-normal text-black">
                      Phone OnePlus
                    </div>
                  </div>
                </div>
                <div className="h-px w-[324px] bg-zinc-300"></div>
                <div className="inline-flex h-[60px] items-center justify-start pl-4 pr-[163px]">
                  <div className="inline-flex items-start justify-start gap-2 self-stretch">
                    <div className="relative h-4 w-4"></div>
                    <div className="font-['Amazon Ember'] text-[13px] font-normal text-black">
                      Phone under 50,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0.5 w-[1020px] bg-zinc-300"></div>
          <div className="inline-flex h-24 w-[1020px] items-center justify-center bg-white px-[327px] py-6">
            <div className="inline-flex shrink grow basis-0 items-center justify-center self-stretch rounded border border-zinc-300 p-4">
              <div className="inline-flex items-start justify-start gap-6 self-stretch">
                <div className="flex items-start justify-start gap-2">
                  <div className="relative h-4 w-4"></div>
                  <div className="font-['Amazon Ember'] h-4 w-[54px] text-sm font-normal text-neutral-500">
                    Previous
                  </div>
                </div>
                <div className="font-['Amazon Ember'] h-4 w-[9px] text-sm font-normal text-black">
                  1
                </div>
                <div className="font-['Amazon Ember'] h-4 w-[9px] text-sm font-normal text-neutral-500">
                  2
                </div>
                <div className="font-['Amazon Ember'] h-4 w-[9px] text-sm font-normal text-neutral-500">
                  3
                </div>
                <div className="font-['Amazon Ember'] h-4 w-3.5 text-center text-sm font-normal text-neutral-500">
                  ...
                </div>
                <div className="font-['Amazon Ember'] h-4 w-[17px] text-sm font-normal text-neutral-500">
                  98
                </div>
                <div className="flex items-start justify-start gap-2">
                  <div className="font-['Amazon Ember'] h-4 w-[30px] text-sm font-normal text-black">
                    Next
                  </div>
                  <div className="relative h-4 w-4 origin-top-left -rotate-180"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-8 w-[1020px] bg-white"></div>
        </div>
      </div>{" "}
    </main>
  );
}
