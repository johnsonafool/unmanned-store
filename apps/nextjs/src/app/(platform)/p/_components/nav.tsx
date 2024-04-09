export function Nav() {
  return (
    <>
      <Header />
    </>
  );
}

function Header() {
  return (
    <div className="relative h-[99px] w-[1440px] bg-slate-800">
      <div className="absolute left-0 top-0 inline-flex h-[60px] w-[1440px] items-center justify-end bg-zinc-900 py-2.5 pl-4 pr-2.5">
        <div className="inline-flex items-center justify-center gap-5">
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
          <div className="flex w-[764px] items-start justify-center gap-[667px] rounded bg-white">
            <div className="inline-flex w-[52px] items-start justify-center gap-1.5 self-stretch rounded-bl rounded-tl bg-zinc-100 py-[13px] pl-[9px] pr-2.5">
              <div className="font-['Amazon Ember'] text-xs font-normal text-zinc-900">
                All
              </div>
              <div className="relative flex h-3 w-3 flex-col items-start justify-start"></div>
            </div>
            <div className="inline-flex w-[45px] items-center justify-center self-stretch rounded-br rounded-tr bg-orange-300 py-2 pl-[11px] pr-2.5">
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
  );
}
