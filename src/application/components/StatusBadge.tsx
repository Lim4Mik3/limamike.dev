import { NodeStatus, TreeNodeType } from "@/domain/entities/TreeNode";
import { cn } from "@/utils/cn";

type Props = {
  type: TreeNodeType;
  status: NodeStatus | null;
}

export function StatusBadge({ type, status }: Props) {
  if (type !== 'COMPONENT') return null;

  return (
    <span
      className={cn("w-2 h-2 rounded-full", {
        "bg-green-500": status === 'operating',
        "bg-red-500": status === 'alert',
      })}
    >
    </span>
  )
}

export type { Props as StatusBadgeProps };