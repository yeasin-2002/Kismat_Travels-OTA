import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "shadcn/components/ui/dialog";
import { Input } from "shadcn/components/ui/input";
import { Label } from "shadcn/components/ui/label";
import { Button } from "shadcn/components/ui/button";

import React, { SVGProps, useEffect, useRef, useState } from "react";
import cookie from "js-cookie";
import { $post } from "$/utils";
import { useMutation } from "@tanstack/react-query";
import { DialogClose } from "@radix-ui/react-dialog";

const EditProfit = ({
  Icon,
  FOR,
  presentData,
  reload,
  id,
}: {
  Icon: any;
  FOR: "User" | "Agent";
  presentData: string;
  reload: Function;
  id: string;
}) => {
  const [number, SetNumber] = useState("");
  const [password, SetPassword] = useState("");
  const closeBtn = useRef<any>();

  useEffect(() => {
    SetNumber(presentData);
  }, [presentData]);

  const { mutateAsync, isError, error, isPending } = useMutation<any, any, any>({
    mutationFn: (val: any) => $post("/profit/change_information", val),
    onSuccess: () => {
      reload();
      closeBtn.current.click();
      SetPassword("");
    },
  });

  const updateGatewayStatus = async () => {
    try {
      await mutateAsync({
        password: password,
        update: FOR,
        value_profit: number,
        id: id,
        Headers: {
          sessions: cookie.get("value_ad"),
          key: cookie.get("key_ad"),
        },
      });
    } catch (error) {}
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Icon />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Sell profit Percentage for {FOR}</DialogTitle>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="p">Profit Percentage</Label>
                <Input
                  id="p"
                  type="number"
                  value={number}
                  onChange={(e) => {
                    SetNumber(e.target.value);
                  }}
                />
              </div>
              <div>
                <Label htmlFor="Password">Password</Label>
                <Input
                  id="Password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    SetPassword(e.target.value);
                  }}
                />
              </div>
              <Button onClick={updateGatewayStatus} type="submit">
                {isPending && <EosIconsBubbleLoading />}Save changes
              </Button>
            </div>
          </DialogHeader>
          <DialogFooter>
            {isError && (
              <div className="w-full  rounded-md bg-red-500/20 p-2 shadow-md shadow-red-400/10 animate-in ">
                <div className="flex w-full items-center justify-start">
                  <div className="relative top-[1.5px] pr-2 text-2xl">
                    <FluentErrorCircle16Regular />
                  </div>
                  <p>
                    {typeof error?.response?.data?.message === "string" ||
                    error?.response?.data?.message instanceof String
                      ? error?.response?.data?.message
                      : "Something went wrong"}
                  </p>
                </div>
              </div>
            )}
            <DialogClose asChild>
              <button ref={closeBtn} type="button" className="opacity-0"></button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfit;

export function EosIconsBubbleLoading(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="2" r="0" fill="currentColor">
        <animate
          attributeName="r"
          begin="0"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)">
        <animate
          attributeName="r"
          begin="0.125s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)">
        <animate
          attributeName="r"
          begin="0.25s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)">
        <animate
          attributeName="r"
          begin="0.375s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)">
        <animate
          attributeName="r"
          begin="0.5s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)">
        <animate
          attributeName="r"
          begin="0.625s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)">
        <animate
          attributeName="r"
          begin="0.75s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)">
        <animate
          attributeName="r"
          begin="0.875s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
    </svg>
  );
}

export function FluentErrorCircle16Regular(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3Zm0 7a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Zm0-5.5a.5.5 0 0 1 .492.41L8.5 5v3.5a.5.5 0 0 1-.992.09L7.5 8.5V5a.5.5 0 0 1 .5-.5Z"
      ></path>
    </svg>
  );
}
