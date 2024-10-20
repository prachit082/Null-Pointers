import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgSwitch } from '@angular/common';
import { NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css',
})
export class AchievementsComponent {
  // achievements = [
  //   {
  //     title: 'Eco Newcomer',
  //     description: 'Complete your first eco-friendly activity.',
  //     badgeTiers: [
  //       {
  //         level: 'Bronze',
  //         requirement: 'Complete 1st activity',
  //         isAchieved: true,
  //       },
  //     ],
  //   },
  //   {
  //     title: 'CO2 Saver',
  //     description:
  //       'Save a certain amount of CO2 emissions through eco-friendly activities.',
  //     badgeTiers: [
  //       { level: 'Bronze', requirement: 'Save 5kg of CO2', isAchieved: true },
  //       { level: 'Silver', requirement: 'Save 50kg of CO2', isAchieved: false },
  //       { level: 'Gold', requirement: 'Save 100kg of CO2', isAchieved: false },
  //     ],
  //   },
  //   {
  //     title: 'Waste Reducer',
  //     description:
  //       'Reduce waste by participating in recycling or upcycling activities.',
  //     badgeTiers: [
  //       {
  //         level: 'Bronze',
  //         requirement: 'Reduce 5kg of waste',
  //         isAchieved: true,
  //       },
  //       {
  //         level: 'Silver',
  //         requirement: 'Reduce 50kg of waste',
  //         isAchieved: false,
  //       },
  //       {
  //         level: 'Gold',
  //         requirement: 'Reduce 100kg of waste',
  //         isAchieved: false,
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Water Saver',
  //     description: 'Conserve water through eco-friendly activities.',
  //     badgeTiers: [
  //       {
  //         level: 'Bronze',
  //         requirement: 'Save 100 liters of water',
  //         isAchieved: true,
  //       },
  //       {
  //         level: 'Silver',
  //         requirement: 'Save 500 liters of water',
  //         isAchieved: false,
  //       },
  //       {
  //         level: 'Gold',
  //         requirement: 'Save 1,000 liters of water',
  //         isAchieved: false,
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Energy Saver',
  //     description:
  //       'Conserve energy by participating in energy-saving initiatives.',
  //     badgeTiers: [
  //       {
  //         level: 'Bronze',
  //         requirement: 'Conserve 10kWh of energy',
  //         isAchieved: false,
  //       },
  //       {
  //         level: 'Silver',
  //         requirement: 'Conserve 50kWh of energy',
  //         isAchieved: false,
  //       },
  //       {
  //         level: 'Gold',
  //         requirement: 'Conserve 100kWh of energy',
  //         isAchieved: false,
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Event Enthusiast',
  //     description:
  //       'Attend eco-friendly events or participate in community activities.',
  //     badgeTiers: [
  //       { level: 'Bronze', requirement: 'Attend 1 event', isAchieved: false },
  //       { level: 'Silver', requirement: 'Attend 5 events', isAchieved: false },
  //       { level: 'Gold', requirement: 'Attend 10 events', isAchieved: false },
  //     ],
  //   },
  //   {
  //     title: 'Tree Planter',
  //     description: 'Participate in tree-planting activities.',
  //     badgeTiers: [
  //       { level: 'Bronze', requirement: 'Plant 1 tree', isAchieved: true },
  //       { level: 'Silver', requirement: 'Plant 5 trees', isAchieved: false },
  //       { level: 'Gold', requirement: 'Plant 10 trees', isAchieved: false },
  //     ],
  //   },
  // ];

  achievements = [
    {
      title: 'Eco Newcomer',
      description: 'Complete your first eco-friendly activity.',
      badgeTiers: [
        {
          level: 'Bronze',
          requirement: 'Complete 1st activity',
          isAchieved: true,
          medal: 'bronze',
        },
      ],
    },
    {
      title: 'CO2 Saver',
      description:
        'Save a certain amount of CO2 emissions through eco-friendly activities.',
      badgeTiers: [
        {
          level: 'Bronze',
          requirement: 'Save 5kg of CO2',
          isAchieved: true,
          medal: 'bronze',
        },
        {
          level: 'Silver',
          requirement: 'Save 50kg of CO2',
          isAchieved: false,
          medal: 'silver',
        },
        {
          level: 'Gold',
          requirement: 'Save 100kg of CO2',
          isAchieved: false,
          medal: 'gold',
        },
      ],
    },
    {
      title: 'Waste Reducer',
      description:
        'Reduce waste by participating in recycling or upcycling activities.',
      badgeTiers: [
        {
          level: 'Bronze',
          requirement: 'Reduce 5kg of waste',
          isAchieved: true,
          medal: 'bronze',
        },
        {
          level: 'Silver',
          requirement: 'Reduce 50kg of waste',
          isAchieved: false,
          medal: 'silver',
        },
        {
          level: 'Gold',
          requirement: 'Reduce 100kg of waste',
          isAchieved: false,
          medal: 'gold',
        },
      ],
    },
    {
      title: 'Water Saver',
      description: 'Conserve water through eco-friendly activities.',
      badgeTiers: [
        {
          level: 'Bronze',
          requirement: 'Save 100 liters of water',
          isAchieved: true,
          medal: 'bronze',
        },
        {
          level: 'Silver',
          requirement: 'Save 500 liters of water',
          isAchieved: false,
          medal: 'silver',
        },
        {
          level: 'Gold',
          requirement: 'Save 1,000 liters of water',
          isAchieved: false,
          medal: 'gold',
        },
      ],
    },
    {
      title: 'Energy Saver',
      description:
        'Conserve energy by participating in energy-saving initiatives.',
      badgeTiers: [
        {
          level: 'Bronze',
          requirement: 'Conserve 10kWh of energy',
          isAchieved: false,
          medal: 'bronze',
        },
        {
          level: 'Silver',
          requirement: 'Conserve 50kWh of energy',
          isAchieved: false,
          medal: 'silver',
        },
        {
          level: 'Gold',
          requirement: 'Conserve 100kWh of energy',
          isAchieved: false,
          medal: 'gold',
        },
      ],
    },
    {
      title: 'Event Enthusiast',
      description:
        'Attend eco-friendly events or participate in community activities.',
      badgeTiers: [
        {
          level: 'Bronze',
          requirement: 'Attend 1 event',
          isAchieved: false,
          medal: 'bronze',
        },
        {
          level: 'Silver',
          requirement: 'Attend 5 events',
          isAchieved: false,
          medal: 'silver',
        },
        {
          level: 'Gold',
          requirement: 'Attend 10 events',
          isAchieved: false,
          medal: 'gold',
        },
      ],
    },
    {
      title: 'Tree Planter',
      description: 'Participate in tree-planting activities.',
      badgeTiers: [
        {
          level: 'Bronze',
          requirement: 'Plant 1 tree',
          isAchieved: true,
          medal: 'bronze',
        },
        {
          level: 'Silver',
          requirement: 'Plant 5 trees',
          isAchieved: false,
          medal: 'silver',
        },
        {
          level: 'Gold',
          requirement: 'Plant 10 trees',
          isAchieved: false,
          medal: 'gold',
        },
      ],
    },
  ];
}
