import { Checkbox, makeStyles, tokens } from '@fluentui/react-components';
import { useId, useState } from 'react';

interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

const tree: TreeNode = {
  id: '1',
  label: 'Natural Wonders',
  children: [
    { id: '2', label: 'Mountains' },
    {
      id: '3',
      label: 'Waterfalls',
      children: [
        { id: '4', label: 'Niagara Falls' },
        { id: '5', label: 'Angel Falls' },
      ],
    },
    { id: '6', label: 'Grand Canyon' },
  ],
};

const defaultChecked = ['2', '5'];

function getLeafIds(node: TreeNode): string[] {
  if (!node.children) {
    return [node.id];
  }
  return node.children.flatMap(getLeafIds);
}

export default function Component() {
  const styles = useStyles();
  const baseId = useId();
  const [checked, setChecked] = useState<Set<string>>(new Set(defaultChecked));

  const getState = (node: TreeNode): boolean | 'mixed' => {
    const leaves = getLeafIds(node);
    const checkedCount = leaves.filter((leaf) => checked.has(leaf)).length;
    if (checkedCount === 0) {
      return false;
    }
    if (checkedCount === leaves.length) {
      return true;
    }
    return 'mixed';
  };

  const toggle = (node: TreeNode, value: boolean) => {
    const leaves = getLeafIds(node);
    setChecked((prev) => {
      const next = new Set(prev);
      leaves.forEach((leaf) => (value ? next.add(leaf) : next.delete(leaf)));
      return next;
    });
  };

  const renderNode = (node: TreeNode) => {
    const nodeId = `${baseId}-${node.id}`;
    return (
      <div key={nodeId}>
        <Checkbox
          id={nodeId}
          label={node.label}
          checked={getState(node)}
          onChange={(_, data) => toggle(node, data.checked === true)}
        />
        {node.children && (
          <div className={styles.children}>{node.children.map(renderNode)}</div>
        )}
      </div>
    );
  };

  return <div className={styles.tree}>{renderNode(tree)}</div>;
}

const useStyles = makeStyles({
  tree: {
    display: 'flex',
    flexDirection: 'column',
  },
  children: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: tokens.spacingHorizontalXXL,
  },
});
