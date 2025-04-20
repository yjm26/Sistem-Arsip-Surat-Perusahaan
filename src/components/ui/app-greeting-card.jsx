import {
  Card,
  CardContent,
} from "@/components/ui/card"




export function CardGreeting() {
  return (
    <Card className="w-[588px] h-[150px] flex items-center justify-between p-4">
      <CardContent className="flex flex-row items-center justify-between w-full">
        {/* Teks */}
        <div className="flex flex-col">
          <h1 className="text-[22px] font-semibold">Selamat Datang, Karina!</h1>
          <p className="text-[12px] font-extralight text-[#121212]">
            Jumat, Januari 26 2025
          </p>
        </div>

        {/* Gambar */}
        <div className="flex-shrink-0">
          <img
            src="./public/img/greeting.jpg"
            alt="Greeting"
            className="w-[120px] h-auto rounded-md"
          />
        </div>
      </CardContent>
    </Card>
  );


}