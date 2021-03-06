ej.addCulture( "ii-CN", {
	name: "ii-CN",
	englishName: "Yi (China)",
	nativeName: "ꆈꌠꁱꂷ (ꍏꉸꏓꂱꇭꉼꇩ)",
	language: "ii",
	numberFormat: {
		"NaN": "ꌗꂷꀋꉬ",
		negativeInfinity: "ꀄꊭꌐꀋꉆ",
		positiveInfinity: "ꈤꇁꑖꀋꉬ",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["$-n","$n"],
			symbol: "¥"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["ꑭꆏꑍ","ꆏꊂ꒔","ꆏꊂꑍ","ꆏꊂꌕ","ꆏꊂꇖ","ꆏꊂꉬ","ꆏꊂꃘ"],
				namesAbbr: ["ꑭꆏ","ꆏ꒔","ꆏꑍ","ꆏꌕ","ꆏꇖ","ꆏꉬ","ꆏꃘ"],
				namesShort: ["ꆏ","꒔","ꑍ","ꌕ","ꇖ","ꉬ","ꃘ"]
			},
			months: {
				names: ["ꋍꆪ","ꑍꆪ","ꌕꆪ","ꇖꆪ","ꉬꆪ","ꃘꆪ","ꏃꆪ","ꉆꆪ","ꈬꆪ","ꊰꆪ","ꊯꊪꆪ","ꊰꑋꆪ",""],
				namesAbbr: ["ꋍꆪ","ꑍꆪ","ꌕꆪ","ꇖꆪ","ꉬꆪ","ꃘꆪ","ꏃꆪ","ꉆꆪ","ꈬꆪ","ꊰꆪ","ꊯꊪꆪ","ꊰꑋꆪ",""]
			},
			AM: ["ꂵꆪꈌꈐ","ꂵꆪꈌꈐ","ꂵꆪꈌꈐ"],
			PM: ["ꂵꆪꈌꉈ","ꂵꆪꈌꉈ","ꂵꆪꈌꉈ"],
			patterns: {
				d: "yyyy/M/d",
				D: "yyyy'ꈎ' M'ꆪ' d'ꑍ'",
				t: "tt h:mm",
				T: "H:mm:ss",
				f: "yyyy'ꈎ' M'ꆪ' d'ꑍ' tt h:mm",
				F: "yyyy'ꈎ' M'ꆪ' d'ꑍ' H:mm:ss",
				M: "M'’ ꆪ’'d'’ ꑍ’'",
				Y: "yyyy'ꈎ' M'ꆪ'"
			}
		}
	}
});