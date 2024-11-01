import Image from "next/image";

export default function TeamsButton({ iconAlt }: { iconAlt: string }) {
  return (
    <a
      href="https://login.live.com/oauth20_authorize.srf?client_id=4b3e8f46-56d3-427f-b1e2-d239b2ea6bca&scope=openId+profile+openid+offline_access&redirect_uri=https%3a%2f%2fteams.live.com%2fv2&response_type=code&state=eyJpZCI6IjAxOTI1ZDZjLTNmYTMtN2M4NS1iMmQ1LTAwNWFhNjI3ZjhiMSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3d&response_mode=fragment&nonce=01925d6c-3fa3-7b17-aa06-da3212bc8a36&prompt=select_account&code_challenge=y0y6zPSLzg-tvfpm01abYr4in3HO1t4AoWAgkRt9nHw&code_challenge_method=S256&x-client-SKU=msal.js.browser&x-client-Ver=3.18.0&uaid=01925d6c3fa37766b9a7542c795e6b19&msproxy=1&issuer=mso&tenant=consumers&ui_locales=en-US&client_info=1&epct=PAQABDgEAAADW6jl31mB3T7ugrWTT8pFe0G62luMn0w2_6XEt1koW9BJheFm531kwXsfRrruQirLSUwSDtBF8QpEZZOWRiNvVjJBv3ND1XULEeKstz-7qyz7zqqNtwXY1Xm5lNRlHFaxS2TJDXup2o_iF72V-8XfY0PUAFY-FVsGONRfnqNYcJfdvrdpXzIdkI3itE3iIJG3vyJeUVwTQsjSGHXGDexKFcXgEFRK3V1XbplA1iidMkyAA&jshs=0#"
      target="_blank"
      className="px-8 sm:px-10 py-3 sm:py-4 w-fit bg-gradient-to-br from-[#1c1f4a] to-[#7B83EB] border-l-4 border-b-4 border-[#16155a] text-white text-lg md:text-xl 3xl:text-2xl font-outfit font-semibold rounded-xl flex gap-6 items-center transition-transform hover:scale-105 active:scale-110"
    >
      <div className="relative h-10 w-10">
        <Image
          src="/images/teams.png"
          fill
          className="object-cover"
          alt={iconAlt}
        />
      </div>
      Kliknij Tutaj
    </a>
  );
}
