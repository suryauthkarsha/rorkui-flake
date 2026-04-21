import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[rgb(10,10,10)] text-[rgb(240,240,240)] text-[16px] leading-[24px] border-[0px_solid_rgb(240,_240,_240)] relative mx-auto overflow-hidden min-h-screen box-border w-[1280px] h-[2481px]">
      <img src="" alt="Div" className="bg-[repeating-linear-gradient(rgba(0,_0,_0,_0)_0px,_rgba(0,_0,_0,_0)_2px,_rgba(0,_0,_0,_0.03)_2px,_rgba(0,_0,_0,_0.03)_4px)] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[2481px]" />
      <div className="bg-[rgb(10,10,10)] text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[2481px]">
        <div className="bg-[lab(2.7417500.00000596046/0.8)] text-[rgb(255,255,255)] text-[16px] leading-[24px] z-[50] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[57px]">
          <div className="text-[rgb(255,255,255)] text-[16px] leading-[24px] p-[20px_24px] border-[0px_solid_rgb(255,_255,_255)] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[56px]">
            <Link href="/" className="text-[rgb(57,255,20)] text-[12px] leading-[16px] tracking-[2.4px] uppercase border-[0px_solid_rgb(57,_255,_20)] absolute left-[455.1875px] top-[20px] box-border m-0 w-[38.40625px] h-[16px]">
              Home
            </Link>
            <button className="text-[rgb(255,45,111)] text-[12px] leading-[16px] tracking-[2.4px] uppercase border-[0px_solid_rgb(255,_45,_111)] absolute left-[533.59375px] top-[20px] box-border m-0 w-[86.40625px] h-[16px]">
              Manifesto
            </button>
            <button className="text-[rgb(0,212,255)] text-[12px] leading-[16px] tracking-[2.4px] uppercase border-[0px_solid_rgb(0,_212,_255)] absolute left-[660px] top-[20px] box-border m-0 w-[57.609375px] h-[16px]">
              Events
            </button>
            <button className="text-[rgb(255,230,0)] text-[12px] leading-[16px] tracking-[2.4px] uppercase border-[0px_solid_rgb(255,_230,_0)] absolute left-[757.609375px] top-[20px] box-border m-0 w-[67.203125px] h-[16px]">
              Contact
            </button>
          </div>
        </div>
        <div className="text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[800px]">
          <img src="https://www.6bithq.in/Social/moon.png" alt="Img" className="text-[rgba(0,0,0,0)] text-[16px] leading-[24px] border-[0px_solid_rgba(0,_0,_0,_0)] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[800px]" />
          <div className="text-[rgb(255,255,255)] text-[16px] leading-[24px] text-center p-[0px_24px] border-[0px_solid_rgb(255,_255,_255)] z-[10] absolute left-[311.984375px] top-[336px] box-border m-0 w-[656.015625px] h-[128px]">
            <p className="text-[rgb(57,255,20)] text-[128px] font-[700] leading-[128px] tracking-[12] text-center border-[0px_solid_rgb(57,_255,_20)] absolute left-[24px] top-[0px] box-border m-0 w-[608.015625px] h-[128px] overflow-hidden text-clip">
              6bithq
            </p>
          </div>
          <p className="text-[oklab(0.9999940.00004556770.0000200868/0.6)] text-[16px] leading-[26px] text-center p-[0px_24px] border-[0px_solid_oklab(0.999994_0.0000455677_0.0000200868_/_0.6)] z-[10] absolute left-[448px] top-[684px] box-border m-0 w-[384px] h-[52px] overflow-hidden text-clip">
            we are an event and media lab who host racked meetups, mixers and events in blr
          </p>
          <img src="data:image/webp;base64,UklGRooDAABXRUJQVlA4WAoAAAAgAAAA/wQAEwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggnAEAADARAJ0BKgAFFAA+bTaWSawioqQgSLGADYlpbuBE+I3EWt/7cfPE4W9X0u8AkiRA/0TZH33IHOaCZoJ32sKGL2INGFbRq/vOjoJmgedHQTLbpjTqQZC60HdP/LTsCkBNOtRtFPSGLz7dZ2mX4+6Nug9XPgTtSwo27GClhRt2MFLCjboRcPrQpGQSR+tMk4zTvaIAAP751h2O/9f4uA+r9LdoX/5abzf2gSTxOyVSvxGBhKsMg7Oaoj8fmoWHi63BSgeKEZkFfHeyBLF0njURL/w1f7CaoUhRI+I4pV2cJUgZDQSlxMa7KKzXNE50bzbcnu1QAAAAAAcoTexmXVDAXX+x72TDopUO0LPzw1+UD33Nn7dnjrs4QHocynRG+udjMZ6W6cdP7/SbEYVbCNlqdk7PfmsPSwhdZBjRYu6K0brusgGwwG8S/+ENvvbKalyK6O6ARRc2sYy7FiV7+mcDSLdmHjCvOw8dkIPAAAAAAAINOLm78iOgNdB9PqDFGKD8f6wlABVupo/hCxaG5jdjtpN8ht7MPZnxNHdxNAA=" alt="Div" className="text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] z-[2] absolute left-[0px] top-[780px] box-border m-0 w-[1280px] h-[20px]" />
        </div>
        <div className="text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] absolute left-[0px] top-[800px] box-border m-0 w-[1280px] h-[800px]">
          <img src="https://www.6bithq.in/Social/test_1.png" alt="Img" className="text-[rgba(0,0,0,0)] text-[16px] leading-[24px] border-[0px_solid_rgba(0,_0,_0,_0)] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[800px]" />
          <div className="bg-[oklab(000/0.5)] text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] z-[1] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[800px]"></div>
          <img src="data:image/webp;base64,UklGRgIEAABXRUJQVlA4WAoAAAAgAAAA/wQAEwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggFAIAAFAVAJ0BKgAFFAA+bTaXSKQpMaIj0olSMA2JaW7gRrnGeLidW5luNHPo1u9gBpcz7ZxNN3Cf/k47kkLeLZWZXTEqITK6zekwsSGUO14xU70l9tQ7uZbo6Gjod8k/SfpP0n59uEAx8mnjurkN1UAyE+fa4Dkz7ZpwfzTykpv4HXHsd6F8LMYW8LGqL5J+jJ5BzUYghFmUtWnX/fJO0G5GyUJaaZTgi0nH1zcr23Yf/VrYkkoAAP77Q7IBoAAHCyuqcKgmyY/HeBxFtbM/jbrHW+fYg71OphZThERTGprCcoDYeGQ7bEEORxLZ/wDdM6jS+0pfFEx/eg3AfDWYnJaRW6uIxGrweWqg1V7U3z/uJCiOLUKb62RmSObT9nb8kflUQ+1J/tzBXUO3demjBGAZu6r0ei6qcHDoeAbe/G7DtYbPRzRqCLlcesk2aeALj8/6tGx+laRilsU9alCFhIavS1gmb1Nl6+JBJOvXin186cbsdzmIFhgABzxM2V77sYtZ6sT3/tN1ERZeELSMhkQvOkJoWdn7rQ/JcnLl1veY//mzUC2lNOFMmbfpwEjG/iI5rIvUG22QEco1TdQc/n4N3Gj9D3F1kNeVBViopotyalrE1WzJL/sRa334LbyZ+GtMrfoPQLTbegNSEupECODQ+GzCx1oNmkTO7M9u1xBfjIayrRl1Pm0UypfSb7pC/1jy3hCAAAA=" alt="Div" className="text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] z-[2] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[20px]" />
          <img src="data:image/webp;base64,UklGRv4CAABXRUJQVlA4WAoAAAAgAAAA/wQAEwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggEAEAAFAOAJ0BKgAFFAA+bTaZSaQioqEgSACADYlpbt3V/tX8ab96fwAFNKoBVeFJFlAKsm+FAKsm3RHWTbojrJt0R1dgFHxc+fDLclezjGESCcYxjZDMZQCmapt6zm6wlYs586I6ybdEdZNuiMtokeEtuVZ+pHV+VnJkCwg0wAD++2s6tPgn1Su75f7/J9BUhXWJ3ii7aiaZfis3A0Mlr1AAAJBpT5gvPkzb156QkZqW8W04dG80QI12lGuL54BrS3Gmavftorw7Yh1R1YU5fP7UeCQYyTlf3bxg4Q4PXVQaFIro8b5Esh7H1gAAAAAAAAAAAQPI04BZeLRsbtpuQpW0qwvg1TNS+4za5I8CQ8tTGSAA" alt="Div" className="text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] z-[2] absolute left-[0px] top-[780px] box-border m-0 w-[1280px] h-[20px]" />
          <div className="text-[rgb(255,255,255)] text-[16px] leading-[24px] p-[96px_24px] border-[0px_solid_rgb(255,_255,_255)] z-[10] absolute left-[304px] top-[14px] box-border m-0 w-[672px] h-[772px]">
            <p className="text-[rgb(255,45,111)] text-[30px] leading-[36px] text-center border-[0px_solid_rgb(255,_45,_111)] absolute left-[24px] top-[96px] box-border m-0 w-[624px] h-[36px] overflow-hidden text-clip">
              Manifesto
            </p>
            <div className="text-[rgb(255,255,255)] text-[16px] leading-[26px] border-[0px_solid_rgb(255,_255,_255)] absolute left-[24px] top-[172px] box-border m-0 w-[624px] h-[504px]">
              <p className="text-[oklab(0.9999940.00004556770.0000200868/0.7)] text-[16px] leading-[26px] border-[0px_solid_oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] absolute left-[0px] top-[0px] box-border m-0 w-[624px] h-[52px] overflow-hidden text-clip">
                it started as a discord server. a bunch of builders who showed up for YC SUS, stayed for the vibes, and never left.
              </p>
              <p className="text-[rgb(255,230,0)] text-[16px] font-[500] leading-[26px] border-[0px_solid_rgb(255,_230,_0)] absolute left-[0px] top-[84px] box-border m-0 w-[624px] h-[26px] overflow-hidden text-clip">
                then it got out of hand (in the best way).
              </p>
              <p className="text-[oklab(0.9999940.00004556770.0000200868/0.7)] text-[16px] leading-[26px] border-[0px_solid_oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] absolute left-[0px] top-[142px] box-border m-0 w-[624px] h-[52px] overflow-hidden text-clip">
                <p className="text-[oklab(0.9999940.00004556770.0000200868/0.7)] text-[16px] leading-[26px] absolute left-[0px] top-[2px] box-border m-0 w-[335.078125px] h-[21px] overflow-hidden text-clip">
                  our first event — the Pre Event Mixer — pulled
                </p>
                <p className="text-[rgb(57,255,20)] text-[16px] font-[500] leading-[26px] border-[0px_solid_rgb(57,_255,_20)] absolute left-[339.09375px] top-[2px] box-border m-0 w-[103.5px] h-[21px] overflow-hidden text-clip">
                  400+ signups
                </p>
                <p className="text-[oklab(0.9999940.00004556770.0000200868/0.7)] text-[16px] leading-[26px] absolute left-[0px] top-[2px] box-border m-0 w-[612.40625px] h-[47px] overflow-hidden text-clip">
                  , a hacker house collab, and a VC partnership. all before we had a website.
                </p>
              </p>
              <p className="text-[oklab(0.9999940.00004556770.0000200868/0.7)] text-[16px] leading-[26px] border-[0px_solid_oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] absolute left-[0px] top-[226px] box-border m-0 w-[624px] h-[52px] overflow-hidden text-clip">
                we're not a community. we're not a club. we're the group chat that somehow keeps shipping IRL.
              </p>
              <p className="text-[rgb(0,212,255)] text-[16px] font-[500] leading-[26px] border-[0px_solid_rgb(0,_212,_255)] absolute left-[0px] top-[310px] box-border m-0 w-[624px] h-[26px] overflow-hidden text-clip">
                a house in june. more events. more chaos. blr is the playground.
              </p>
              <p className="text-[oklab(0.9999940.00004556780.0000200868/0.3)] text-[12px] leading-[16px] tracking-[1.2px] uppercase p-[16px_0px_0px] border-[0px_solid_oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] absolute left-[0px] top-[368px] box-border m-0 w-[624px] h-[32px] overflow-hidden text-clip">
                if you know, you know. if you don't — you will.
              </p>
              <button className="bg-[rgb(185,103,255)] text-[rgb(0,0,0)] text-[12px] leading-[16px] tracking-[1.2px] uppercase p-[12px_24px] border-[0px_solid_rgb(0,_0,_0)] absolute left-[0px] top-[464px] box-border m-0 w-[194.703125px] h-[40px]">
                join the discord
              </button>
            </div>
          </div>
        </div>
        <div className="text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] absolute left-[0px] top-[1600px] box-border m-0 w-[1280px] h-[800px]">
          <img src="https://www.6bithq.in/Social/test_2.png" alt="Img" className="text-[rgba(0,0,0,0)] text-[16px] leading-[24px] border-[0px_solid_rgba(0,_0,_0,_0)] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[800px]" />
          <div className="bg-[oklab(000/0.5)] text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] z-[1] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[800px]"></div>
          <img src="data:image/webp;base64,UklGRjQDAABXRUJQVlA4WAoAAAAgAAAA/wQAEwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggRgEAAPAPAJ0BKgAFFAA+bTaXSaQipSEgSFigDYlpbt1eTp+57wCtPOegv1enRI3FzyEnXZw6IE6jyvXG5ftiDDIZAjcNn8DtPucAIQGQyGQyGQyGQLIUTiUkH/CQ+Ueou3/FLQVYcfiloKsOPxS0FWBYtDSDkRTbRo5E4vZGYQW/1esK1Wq1Wq1WqkgA/vrEllLsyWBTjLrXw1o4WCMWCgip9EgEoTtN/JGBAf8d72m/kjAgP+O97TfyRo1CORtxY7DjHHEU66f02TEulrK7ODvjjYIdeRtX/PyIZtmSDSrh9T+9vV6QLYnlsarE/1VgETjSzAAAVnfAn/k5HreYkJ49JsuBkhcB5EvZNEAAAAAAAaf0RTuELVvY9ma/q8suaXZWZKZKzX2bZD180MOpc+hXSC/ACrR7BGzTm8mpPXJ+SyJCQUAAAAAA" alt="Div" className="text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] z-[2] absolute left-[0px] top-[0px] box-border m-0 w-[1280px] h-[20px]" />
          <img src="data:image/webp;base64,UklGRvwCAABXRUJQVlA4WAoAAAAgAAAA/wQAEwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggDgEAABAPAJ0BKgAFFAA+bTaZSaQioqEgSACADYlpbt1+/xz2f0AT8WJoOp7f2MdzBQuTKAJGj+IudaPEXOtHiLnWjxFzrRymLz6LR/aWsDH4u+ZxS/HFz4AtfyF6m8HnWNjOuDzrR4i51o8Rc60eIudaPEVTOr2RxkKiyEZ2g74e8CQQAAD++wRwSREitAsp+8n039N5bCYYia88nWeLXAXxg9GSXJ9R9REsty8gIOZbQAAACBEBdYDzANBDdZEk8uGtVUeTXv/AMJt5+b5NzHXk3AX3lPXsUv7X3sZkkVvBuzP2ZCKfwo81rJQ84Tr1sI+r0iezIIdsATkAAAAB06jOdLqOvymIsH6Ddv/Jl9YAAA==" alt="Div" className="text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] z-[2] absolute left-[0px] top-[780px] box-border m-0 w-[1280px] h-[20px]" />
          <div className="text-[rgb(255,255,255)] text-[16px] leading-[24px] p-[96px_24px] border-[0px_solid_rgb(255,_255,_255)] z-[10] absolute left-[304px] top-[95.5px] box-border m-0 w-[672px] h-[609px]">
            <div className="text-[rgb(255,255,255)] text-[16px] leading-[24px] text-center border-[0px_solid_rgb(255,_255,_255)] absolute left-[24px] top-[96px] box-border m-0 w-[624px] h-[417px]">
              <p className="text-[rgb(0,212,255)] text-[30px] leading-[36px] text-center border-[0px_solid_rgb(0,_212,_255)] absolute left-[0px] top-[0px] box-border m-0 w-[624px] h-[36px] overflow-hidden text-clip">
                Events
              </p>
              <p className="text-[oklab(0.9999940.00004556770.0000200868/0.7)] text-[16px] leading-[26px] text-center border-[0px_solid_oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] absolute left-[0px] top-[60px] box-border m-0 w-[624px] h-[26px] overflow-hidden text-clip">
                Racked meetups. Late-night mixers. Curated experiences. Stay tuned for what's next.
              </p>
              <div className="text-[rgb(255,255,255)] text-[16px] leading-[24px] text-center p-[48px_0px_0px] absolute left-[0px] top-[166px] box-border m-0 w-[624px] h-[251px]">
                <p className="text-[rgb(255,230,0)] text-[30px] leading-[36px] text-center border-[0px_solid_rgb(255,_230,_0)] absolute left-[0px] top-[48px] box-border m-0 w-[624px] h-[36px] overflow-hidden text-clip">
                  Contact
                </p>
                <p className="text-[oklab(0.9999940.00004556770.0000200868/0.7)] text-[16px] leading-[26px] text-center border-[0px_solid_oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] absolute left-[0px] top-[116px] box-border m-0 w-[624px] h-[26px] overflow-hidden text-clip">
                  want to collab, sponsor an event, or just say hi?
                </p>
                <button className="text-[rgb(57,255,20)] text-[20px] font-[500] leading-[28px] text-center border-[0px_solid_rgb(57,_255,_20)] absolute left-[224.125px] top-[175px] box-border m-0 w-[175.734375px] h-[26px]">
                  6bithq@gmail.com
                </button>
                <p className="text-[oklab(0.9999940.00004556780.0000200868/0.3)] text-[12px] leading-[16px] tracking-[1.2px] text-center uppercase border-[0px_solid_oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] absolute left-[0px] top-[234px] box-border m-0 w-[624px] h-[16px] overflow-hidden text-clip">
                  we read every message. usually reply fast.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[rgb(255,255,255)] text-[16px] leading-[24px] p-[32px_24px] absolute left-[0px] top-[2400px] box-border m-0 w-[1280px] h-[81px]">
          <div className="text-[rgb(255,255,255)] text-[16px] leading-[24px] border-[0px_solid_rgb(255,_255,_255)] absolute left-[192px] top-[32px] box-border m-0 w-[896px] h-[16px]">
            <p className="text-[rgb(57,255,20)] text-[12px] leading-[16px] border-[0px_solid_rgb(57,_255,_20)] absolute left-[0px] top-[0px] box-border m-0 w-[48.015625px] h-[16px] overflow-hidden text-clip">
              6bithq
            </p>
            <button className="text-[oklab(0.6736890.130668-0.178484/0.6)] text-[12px] leading-[16px] tracking-[1.2px] uppercase border-[0px_solid_oklab(0.673689_0.130668_-0.178484_/_0.6)] absolute left-[400.59375px] top-[0px] box-border m-0 w-[58.8125px] h-[16px]">
              discord
            </button>
            <p className="text-[oklab(0.9999940.00004556780.0000200868/0.2)] text-[12px] leading-[16px] tracking-[1.2px] uppercase border-[0px_solid_oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] absolute left-[811.984375px] top-[0px] box-border m-0 w-[84.015625px] h-[16px] overflow-hidden text-clip">
              blr — 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
