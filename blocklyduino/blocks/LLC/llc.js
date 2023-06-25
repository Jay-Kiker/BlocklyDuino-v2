/**
 * @license
 * Copyright 2020 Sébastien Canet
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Relay actuator blocks for Blockly.
 * @author scanet@libreduc.cc (Sébastien Canet)
 */
 
'use strict';

goog.provide('Blockly.Constants.LLC');

goog.require('Blockly.Blocks');
goog.require('Blockly');

var relayMediaFolder = "./blocklyduino/blocks/llc/";

Blockly.Blocks['MOTOR_CONTROL'] = {
	init: function() {
        this.appendDummyInput()
        .appendField(Blockly.Msg.MOTOR_CONTRL_TEXT)
        .appendField(new Blockly.FieldImage(relayMediaFolder + 'motor.jfif', 64, 64))
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_LEFT)
            .appendField(Blockly.Msg.MOTOR_CONTRL_SPEED)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT")
		this.appendDummyInput()
			.appendField(Blockly.Msg.MOTOR_CONTRL_DIRECTION)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setStyle('llc_blocks');
		this.setTooltip(Blockly.Msg.MOTOR_CONTRL_TOOLTIP);
	}
};

Blockly.Blocks['LINE_FOLLOW_CONTROLLER'] = {
	init: function() {
        this.appendDummyInput()
        .appendField(Blockly.Msg.LINE_FOLLOW_CONTROLLER_TEXT)
        .appendField(new Blockly.FieldImage(relayMediaFolder + 'line_follow.jpg',  64, 64))
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_LEFT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setStyle('llc_blocks');
		this.setTooltip(Blockly.Msg.LINE_FOLLOW_CONTROLLER_TOOLTIP);
	}
};