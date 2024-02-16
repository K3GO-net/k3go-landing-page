import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ButtonConnectCustom = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        const handelOpenModal = () => {
          if (!connected) {
            openConnectModal();
          }
          if (chain?.unsupported) {
            openChainModal();
          }
          openAccountModal();
        };
        if (!connected || chain?.unsupported) {
          return (
            <div
              onClick={handelOpenModal}
              className="py-3 hover:cursor-pointer w-[220px] transition hover:translate-x-1 text-center hover:-translate-y-1 font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px] shadow-md shadow-primary/50"
            >
              {(() => {
                if (!connected) {
                  return <div className="">CONNECT WALLET</div>;
                }
                if (chain.unsupported) {
                  return <div className="">WRONG NETWORK</div>;
                }
              })()}
            </div>
          );
        } else {
          return (
            <div
              onClick={handelOpenModal}
              className="py-3 hover:cursor-pointer w-[220px] transition hover:translate-x-1 text-center hover:-translate-y-1 font-medium text-[16px] border border-primary/50 rounded-tl-[24px] rounded-br-[24px] shadow-md shadow-primary/50"
            >
              {account.address.substring(0, 6)}...
              {account.address.substring(
                account.address.length - 4,
                account.address.length,
              )}
            </div>
          );
        }
      }}
    </ConnectButton.Custom>
  );
};
