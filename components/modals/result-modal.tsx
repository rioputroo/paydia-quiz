"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import useModalStore from "@/hooks/useModalStore";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ResultModal = () => {
  const { isOpen, type, onClose, additionalData } = useModalStore();
  const open = isOpen && type === "showResults";
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl md:text-2xl">
            Quiz Result
          </DialogTitle>
        </DialogHeader>
        <Separator />

        {additionalData?.score === additionalData?.limit &&
          <div className="flex justify-center items-center">
            <Image
              src={"/quiz-check.svg"}
              alt="quiz check"
              priority
              width={48}
              height={48}
            />
          </div>
        }

        {additionalData?.score !== additionalData?.limit &&
          <div className="flex justify-center items-center">
            <Image
              src={"/quiz-cross.svg"}
              alt="quiz cross"
              priority
              width={48}
              height={48}
            />
          </div>
        }
        <div className="flex flex-col items-center">
          <p className="text-[20px] md:2xl text-primary font-semibold tracking-wide">
            <p className="text-[20px] font-medium text-[#090A0B]">You scored:</p>
            {additionalData?.score === additionalData?.limit &&
              <span className="flex justify-center items-center text-4xl text-[#0B7B69]">{`${additionalData?.score}/${additionalData?.limit}`}</span>
            }

            {additionalData?.score !== additionalData?.limit &&
              <span className="flex justify-center items-center text-4xl text-[#C03744]">{`${additionalData?.score}/${additionalData?.limit}`}</span>
            }
          </p>
          <Button
            onClick={() => {
              router.push("/");
              onClose();
            }}
            className="mt-3 md:mt-5 bg-[#1926b2] text-white w-[138px] h-[44px] text-base hover:bg-[#1926b2]"
          >
            Play Again
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResultModal;
