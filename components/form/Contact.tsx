import FancyButton from "@/components/FancyButton";

export default function Contact() {
  return (
    <div>
      <form className="flex flex-row">
        <div className="relative md:row-span-3">
          <label htmlFor="message" className="mb-2 block">
            Wiadomość
          </label>
          <textarea
            id="message"
            className="min-h-[200px] resize-none md:min-h-[312px]"
            placeholder="W czym możemy Ci pomóc?"
          />
        </div>

        <div>
          <div className="space-y-2">
            <label htmlFor="title">Tytuł</label>
            <input id="title" placeholder="Tytuł" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name">Imię i Nazwisko</label>
            <input id="name" placeholder="Imię i Nazwisko" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" />
          </div>
          <div className="md:col-span-2">
            <FancyButton text="Wyślij" />
          </div>
        </div>
      </form>
    </div>
  );
}
