import { AlertCircle, Info } from "lucide-react"
import MessageForm from "./Form"

export default function SurgeonQuestionForm() {
  return (
    <div id="contactForm" className="mx-auto my-8 max-w-2xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-center text-2xl font-bold">Ask Our Surgeons</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <MessageForm />
        <div className="space-y-4">
          <div className="rounded-md bg-blue-50 p-4">
            <h3 className="mb-2 flex items-center text-lg font-semibold text-blue-800">
              <Info className="mr-2" size={20} />
              Helpful Information
            </h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-blue-700">
              <li>
                Check our{" "}
                <a href="/#" className="underline">
                  FAQ section
                </a>{" "}
                for quick answers
              </li>
              <li>For emergencies, please call 911 or visit the ER</li>
              <li>Responses may take 1-2 business days</li>
              <li>Provide as much detail as possible for accurate answers</li>
            </ul>
          </div>
          <div className="rounded-md bg-gray-50 p-4">
            <h3 className="mb-2 flex items-center text-lg font-semibold text-gray-800">
              <AlertCircle className="mr-2" size={20} />
              Privacy Notice
            </h3>
            <p className="text-sm text-gray-700">
              Your privacy is important to us. We handle all information in accordance with HIPAA guidelines. Please do
              not include sensitive personal information in your message. For more details, read our{" "}
              <a href="/#" className="underline">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
