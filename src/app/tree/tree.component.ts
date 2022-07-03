import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { Component } from "@angular/core";


/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface VehicleNode {
  name: string;
  id?: number;
  children?: VehicleNode[];
}

const TREE_DATA: VehicleNode[] = [
  {
    name: "Infiniti",
    children: [
      {
        name: "G50",
        children: [
          { name: "Pure AWD", id: 1 },
          { name: "Luxe", id: 2 }
        ]
      },
      {
        name: "QX50",
        children: [
          { name: "Pure AWD", id: 3 }, 
          { name: "Luxe", id: 4 }
        ]
      }
    ]
  },
  {
    name: "BMW",
    children: [
      {
        name: "2 Series",
        children: [
          { name: "Coupé", id: 5 },
          { name: "Gran Coupé", id: 6 }
        ]
      },
      {
        name: "3 Series",
        children: [
          { name: "Sedan", id: 7 }, 
          { name: "PHEV", id: 8 }
        ]
      }
    ]
  }
];

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  treeControl = 
    new NestedTreeControl<VehicleNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<VehicleNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: VehicleNode) =>
    !!node.children && node.children.length > 0;
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
