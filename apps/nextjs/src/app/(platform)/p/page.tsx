import { Input } from "@acme/ui/input";

export const runtime = "edge";

export default async function HomePage() {
  return (
    <main className="">
      <div className="relative h-[900px] w-[1440px] bg-gray-200">
        <div className="absolute left-0 top-0 h-[99px] w-[1440px] bg-slate-800">
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
              <div className="flex w-[764px] items-start justify-between rounded bg-white">
                <div className="inline-flex w-[52px] items-start justify-center gap-1.5 self-stretch rounded-bl rounded-tl bg-zinc-100 py-[13px] pl-[9px] pr-2.5">
                  <div className="font-['Amazon Ember'] text-xs font-normal text-zinc-900">
                    All
                  </div>
                  <div className="relative flex h-3 w-3 flex-col items-start justify-start"></div>
                </div>
                <Input
                  className="hull w-full border-none bg-none outline-none focus-visible:ring-0"
                  placeholder="Search Amazon"
                />
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
        <div className="absolute left-[80px] top-[514px] h-[185px] w-[1281px] bg-gradient-to-b from-orange-200 to-gray-200"></div>
        <img
          className="absolute left-[80px] top-[99px] h-[415px] w-[1281px]"
          src="https://via.placeholder.com/1281x415"
        />
        <div className="absolute left-[155px] top-[330px] inline-flex items-start justify-start gap-10">
          <div className="inline-flex w-[350px] flex-col items-start justify-center gap-4 bg-white px-5 pb-[22px] pt-5">
            <div className="relative flex h-[60px] w-[310px] flex-col items-start justify-start">
              <div className="relative h-[60px] w-[60px]"></div>
              <div className="font-['Amazon Ember'] w-[234px] text-lg font-bold text-zinc-900">
                Hi, John
              </div>
              <div className="font-['Amazon Ember'] w-[234px] text-[13px] font-normal text-zinc-900">
                Customer since 2017
              </div>
            </div>
            <div className="font-['Amazon Ember'] w-[310px] text-[13px] font-bold text-zinc-900">
              Top links for you
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2.5 self-stretch">
              <div className="inline-flex items-start justify-start gap-2.5">
                <div className="flex h-[130px] items-center justify-center bg-slate-50 px-3 pb-3 pt-3.5">
                  <div className="inline-flex shrink grow basis-0 flex-col items-center justify-end gap-5 self-stretch pt-2.5">
                    <img
                      className="h-[60px] w-[92.20px]"
                      src="https://via.placeholder.com/92x60"
                    />
                    <div className="font-['Amazon Ember'] w-[126px] text-center text-xs font-normal text-zinc-900">
                      Your Orders
                    </div>
                  </div>
                </div>
                <div className="flex h-[130px] w-[150px] items-center justify-center bg-slate-50 p-3">
                  <div className="relative shrink grow basis-0 self-stretch">
                    <div className="font-['Amazon Ember'] absolute left-0 top-[92px] w-[126px] text-center text-xs font-normal text-zinc-900">
                      Mobiles & Accessories
                    </div>
                    <img
                      className="absolute left-[31px] top-0 h-[82px] w-[64.92px]"
                      src="https://via.placeholder.com/65x82"
                    />
                  </div>
                </div>
              </div>
              <div className="inline-flex items-start justify-start gap-2.5">
                <div className="flex h-[130px] w-[150px] items-center justify-center bg-slate-50 p-3">
                  <div className="inline-flex flex-col items-center justify-center gap-2.5 self-stretch">
                    <img
                      className="h-[82px] w-[68.05px]"
                      src="https://via.placeholder.com/68x82"
                    />
                    <div className="font-['Amazon Ember'] w-[126px] text-center text-xs font-normal text-zinc-900">
                      Watches for Men
                    </div>
                  </div>
                </div>
                <div className="flex h-[130px] w-[150px] items-center justify-center bg-slate-50 p-3">
                  <div className="inline-flex flex-col items-center justify-end gap-2.5 self-stretch">
                    <img
                      className="h-[82px] w-[101.67px]"
                      src="https://via.placeholder.com/102x82"
                    />
                    <div className="font-['Amazon Ember'] w-[126px] text-center text-xs font-normal text-zinc-900">
                      Fashion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[420px] w-[350px] bg-white">
            <div className="font-['Amazon Ember'] absolute left-[20px] top-[20px] h-[50px] w-[310px] text-lg font-bold text-zinc-900">
              Up to 70% off | Electronics clearance store
            </div>
            <img
              className="absolute left-[20px] top-[94px] h-[249px] w-[310px]"
              src="https://via.placeholder.com/310x249"
            />
            <div className="font-['Amazon Ember'] absolute left-[20px] top-[375px] text-xs font-normal text-cyan-700">
              See more
            </div>
          </div>
          <div className="inline-flex w-[350px] flex-col items-start justify-center gap-6">
            <div className="relative flex h-[146px] w-[350px] flex-col items-start justify-start bg-white">
              <div className="font-['Amazon Ember'] h-6 w-[310px] text-lg font-bold text-zinc-900">
                Shop on the Amazon App
              </div>
              <div className="font-['Amazon Ember'] w-[310px] text-[13px] font-normal text-zinc-900">
                Fast, convenient and secure | Over 17 crore products in your
                pocket
              </div>
              <div className="font-['Amazon Ember'] w-[311px] text-xs font-normal text-cyan-700">
                Download the Amazon App
              </div>
            </div>
            <img
              className="h-[250px] w-[350px]"
              src="https://via.placeholder.com/350x250"
            />
          </div>
        </div>
        <div className="absolute left-[155px] top-[782px] inline-flex h-[444px] items-start justify-start gap-10">
          <div className="relative h-[420px] w-[740px] bg-white">
            <img
              className="absolute left-[-3px] top-0 h-[420px] w-[746.67px]"
              src="https://via.placeholder.com/747x420"
            />
            <div className="absolute left-0 top-0 h-[420px] w-[740px] bg-black">
              <div className="font-['Amazon Ember'] absolute left-[32px] top-[32px] h-6 w-[399px] text-[21px] font-extrabold text-white">
                Prime Video Recommendation for you
              </div>
              <div className="font-['Amazon Ember'] absolute left-[32px] top-[68px] w-[310px] text-[13px] font-normal text-white">
                La La Land (English)
              </div>
              <div className="font-['Amazon Ember'] absolute left-[32px] top-[372px] w-[310px] text-[13px] font-normal text-white">
                Start watching on Prime
              </div>
            </div>
          </div>
          <div className="relative h-[420px] w-[350px] bg-white">
            <div className="absolute left-[20px] top-[60px] inline-flex flex-col items-start justify-start gap-2.5">
              <div className="inline-flex items-start justify-start gap-2.5">
                <img
                  className="h-[118px] w-[150px]"
                  src="https://via.placeholder.com/150x118"
                />
                <img
                  className="h-[118px] w-[150px]"
                  src="https://via.placeholder.com/150x118"
                />
              </div>
              <div className="inline-flex items-start justify-start gap-2.5">
                <div className="font-['Amazon Ember'] w-[150px] text-[13px] font-normal text-zinc-900">
                  Bedsheets & curtains
                </div>
                <div className="font-['Amazon Ember'] w-[150px] text-[13px] font-normal text-zinc-900">
                  Home decoration
                </div>
              </div>
              <div className="inline-flex items-start justify-start gap-2.5">
                <img
                  className="h-[118px] w-[150px]"
                  src="https://via.placeholder.com/150x118"
                />
                <img
                  className="h-[118px] w-[150px]"
                  src="https://via.placeholder.com/150x118"
                />
              </div>
              <div className="inline-flex items-start justify-start gap-2.5">
                <div className="font-['Amazon Ember'] w-[150px] text-[13px] font-normal text-zinc-900">
                  Home storage
                </div>
                <div className="font-['Amazon Ember'] w-[150px] text-[13px] font-normal text-zinc-900">
                  Lightning solutions
                </div>
              </div>
            </div>
            <div className="font-['Amazon Ember'] absolute left-[20px] top-[20px] h-6 w-[310px] text-lg font-bold text-zinc-900">
              Revamp your home in style
            </div>
            <div className="font-['Amazon Ember'] absolute left-[20px] top-[382px] text-xs font-normal text-cyan-700">
              See more
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
