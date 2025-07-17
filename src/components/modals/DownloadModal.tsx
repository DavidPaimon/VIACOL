import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FaFileDownload, FaEye } from "react-icons/fa"

interface MiniModalProps {
  trigger: React.ReactNode
  filePath: string
}

export default function MiniModal({ trigger, filePath }: MiniModalProps) {
  const encodedPath = encodeURIComponent(filePath)

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-sm w-[90vw] text-center rounded-2xl">
        <h3 className="text-lg font-semibold">Reglamento interno de trabajo</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
          <a
            href={`/${encodedPath}`}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2"
          >
            <Button className="w-full justify-center">
              Descargar
              <FaFileDownload className="ml-2 mt-1" />
            </Button>
          </a>

          <a
            href={`/${encodedPath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2"
          >
            <Button variant="outline" className="w-full justify-center">
              Visualizar
              <FaEye className="ml-2 mt-1" />
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
